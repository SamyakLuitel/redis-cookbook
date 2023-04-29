import redis
redis = redis.Redis(host='localhost', port=6379,db=0)
redis.smembers('cicle:jdoe:soccer')

# set(['users:toby', "users:adam","users:apollo","users:mike"])
redis.sadd('circle:jdoe:scoccer','users:fred')
redis.smembers('circle:jdoe:soccer')
print(redis.smembers('circle:jdoe:soccer'))