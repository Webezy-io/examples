from client import projectmetadata as metadatum_client
from generated.metadata_pb2 import TestMetadata
# Starting client class
client = metadatum_client()
unary_test_msg = TestMetadata(SimpleField="Simple Message")
# Constructing metadata from tuples inside a tuple
metadata = (('x-some-test-key','Some Value From Client'),)
# Sending Reequest with additional metadata
response, call = client.Metadatum_stub.TestUnary.with_call(unary_test_msg,metadata=metadata)
print("Metadatum client recieved response: SimpleField:%s" % response.SimpleField)
# Iterating trailing metadata sent by server
for key, value in call.trailing_metadata():
    print('Metadatum client received trailing metadata: key=%s value=%s' %
            (key, value))