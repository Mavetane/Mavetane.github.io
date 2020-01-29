---
layout: post
titile: MongoDB continues
date: 2020-01-20
---

Collen Maphike

# MongoDB continues

## Replication

MongoDB provides high availability with replica sets. A replica set consist of two or more copies of the data. Each replica set member may act in the role of primary or secondary replica at any time.

All writes and reads done on the primary replica by default. Secondary replicas maintain a copy of the data of the primary using built-in replication. When a primiary replica fails, the replica set automatically conducts an election process to determine which secondary should become the primary. Secondarieds can optionally serve read operations, but that data is only eventually consistent by default.

## Aggregation

MongoDB provides three ways to perform aggregation: the aggregation pipeline, the map-reduce function, and single-purpose aggragation methods.

Map-reduce can be used for batch processing data and aggregation operations. But according to MongoDB's documentation, the Aggregation Pipeline provides better performance for most aggregation operations.

The aggregation framework enables users to obtain the kind of results for which the SQL GROUP BY clause is used. Agrregation operators can be strung together to form a pipeline - analogous to Unix Pipes. The aggregation framework includes the $lookup operator which can join documents from multiple collections, as well as statistical operators such as standard deviation.

