#!/bin/bash

# TODO:
# 把部署、本地运行、创建新文档等功能集成到该文档
# 创建一个交互式的流程

APP_NAME="app.mealmatch"
APP_PORT=8000

usage() {
    echo "Usage: sh boot [start|stop|restart|status|deploy]"
    exit 1
}

is_exist(){
    PID=$(lsof -i:${APP_PORT} | awk '/LISTEN/ { printf "%s ", $2 } END { print "" }')
    if [ -z "${PID}" ]; then
        return 1
    else
        return 0
    fi
}


start(){
    if is_exist; then
        echo "${APP_NAME} is already running, PID=${PID}"
    else
        python3 -m ${APP_NAME}
        PID=$($!)
        echo "${APP_NAME} start success, PID=$!"
    fi
}

stop(){
    if is_exist; then
        kill -9 ${PID}
        echo "${APP_NAME} process stop, PID=${PID}"
    else
        echo "There is no process of ${APP_NAME}"
    fi
}



BACKEND_DIR=$(dirname "$(readlink -f "$0")")
cd "${BACKEND_DIR}" || exit
echo "${BACKEND_DIR}"

case $1 in
"start")    # TODO
        start
        ;;
"stop") # TODO
        stop
        ;;
"create")   # TODO
        create
        ;;
"deploy")   # TODO
        deploy
        ;;
*)
        usage
        ;;
esac

exit 0