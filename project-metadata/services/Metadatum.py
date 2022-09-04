"""Webezy.io Generated Service Implementation Code """

# Services method + types implemantation imports
from typing import Iterator
import logging
from services.generated import Metadatum_pb2 as Metadatum_messages
from services.generated import Metadatum_pb2_grpc as Metadatum_service
# Logging util function configurations
logging.basicConfig(
	level="DEBUG",
	format="%(asctime)s - %(funcName)20s() - %(name)s - %(levelname)s - %(message)s",
	datefmt="%Y%m%d-%H:%M%p")


class Metadatum(Metadatum_service.MetadatumServicer):

	# IN:[domain.metadata.v1.TestMetadata] - OUT:[domain.metadata.v1.TestMetadata]
	def TestUnary(self, TestMetadata:Metadatum_messages.metadata__pb2.TestMetadata, context):
		# Constucting simple response
		response = Metadatum_messages.metadata__pb2.TestMetadata(SimpleField="Some Message From Server")
		# Iterating client metadata
		for key, value in context.invocation_metadata():
			print('Received initial metadata: key=%s value=%s' % (key, value))
		# Constructing trailing metadata to be sent back to client
		metadata=(('x-server-token', 'The value should be str'),)
		# Setting the metadata on call context
		context.set_trailing_metadata(metadata)
		return response


		# Leave blank space [Compiler-issue]
