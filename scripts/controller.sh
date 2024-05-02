#!/bin/bash

HEXO_PORT=4000

usage(){
    cat << EOF
    Usage: $(basename "$0") [options]

    This script serves as the controller for the Hexo server.

    Options:
    -h, --help                      Display this help message
    -r, --run [mode]                Run the Hexo server locally
    -s, --stop                      Stop the local server process
    -c, --create <title> [layout]   Create a post with a specified title and layout
    -d, --deploy                    Deploy the Hexo website to a remote site
    -p, --publish <title>           Publish a draft
    -g, --generate                  Generate static files

    Arguments:
    mode:       Default mode for running without drafts; Can be "draft" mode for running with drafts   
    title:      A string enclosed in double quotes
    layout:     Default layout is "post"; Can be "draft", "guitar", etc.

    Examples:
    $(basename "$0") -h
    $(basename "$0") -r draft
    $(basename "$0") -c "New post" draft
EOF
}

is_exist(){
    PID=$(lsof -i:${HEXO_PORT} | awk '/LISTEN/ { printf "%s ", $2 } END { print "" }')
    if [ -z "${PID}" ]; then
        return 1
    else
        return 0
    fi
}


run(){
    if is_exist; then
        echo "Hexo is already running, PID=${PID}"
    else
        if [ "$1" = "draft" ]; then
            hexo S --draft
        else
            hexo S
        fi
        
    fi
}

stop(){
    if is_exist; then
        kill -9 ${PID}
        echo "Hexo process stop, PID=${PID}"
    else
        echo "There is no process of hexo"
    fi
}


PROJ_DIR=$(dirname "$(readlink -f "$0")")
cd "${PROJ_DIR}" || exit

case $1 in
    -r|--run)
        run $2
        exit 0
        ;;
    -s|--stop)
        stop
        exit 0
        ;;
    -c|--create)
        hexo new $3 $2
        exit 0
        ;;
    -d|--deploy)
        hexo deploy
        exit 0
        ;;
    -h|--help)
        usage
        exit 0
        ;;
    -p|--publish)
        hexo P $2
        echo "Publish '$2'"
        exit 0
        ;;
    -g|--generate)
        hexp generate
        exit 0
        ;;
    *)
        usage
        exit 1
        ;;
esac
