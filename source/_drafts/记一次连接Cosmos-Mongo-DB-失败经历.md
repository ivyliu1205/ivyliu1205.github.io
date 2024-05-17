---
title: 记一次连接Cosmos Mongo DB 失败经历
categories: Draft
date: 2024-05-16 18:47:55
updated: 2024-05-16 18:47:55
tags:
---

```bash
pymongo.errors.ConfigurationError: The resolution lifetime expired after 21.138 seconds: Server Do53:198.18.0.2@53 answered The DNS operation timed out.; Server Do53:198.18.0.2@53 answered The DNS operation timed out.; Server Do53:198.18.0.2@53 answered The DNS operation timed out.; Server Do53:198.18.0.2@53 answered The DNS operation timed out.; Server Do53:198.18.0.2@53 answered The DNS operation timed out.; Server Do53:198.18.0.2@53 answered The DNS operation timed out.; Server Do53:198.18.0.2@53 answered The DNS operation timed out.
```

```python
import dns.resolver

dns.resolver.default_resolver = dns.resolver.Resolver(configure=False)
dns.resolver.default_resolver.nameservers = ['8.8.8.8']
```