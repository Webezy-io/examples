"""Webezy.io Generated Server Code"""
import grpc

import logging

from concurrent import futures

import argparse

import asyncio

from services import Metadatum

from services.generated import Metadatum_pb2_grpc

# [Webezy.prod.server.init] - DO NOT REMOVE !
async def startServing(port):
	server = grpc.aio.server()
	addr = f'[::]:{port}'
	server.add_insecure_port(addr)
	Metadatum_pb2_grpc.add_MetadatumServicer_to_server(Metadatum.Metadatum(),server)
	await server.start()
	await server.wait_for_termination()

# [Webezy.prod.server.main] - DO NOT REMOVE !
def main():
	parser = argparse.ArgumentParser()
	parser.add_argument("--port",
                        nargs="?",
                        type=int,
                        default=50051,
                        help="the listening port")
	args = parser.parse_args()
	logging.info('Starting Server at %s' % args.port)
	asyncio.run(startServing(args.port))

# [Webezy.prod.server.entry] - DO NOT REMOVE !
if __name__ == '__main__':
	logging.basicConfig(level=logging.INFO)
	main()
	asyncio.run(startServing())

# [Webezy.dev.server.init] - DO NOT REMOVE !
class Serve():
	def __init__(self,port):
		self.server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
		Metadatum_pb2_grpc.add_MetadatumServicer_to_server(Metadatum.Metadatum(),self.server)
		self.addr = f'[::]:{port}'
		self.server.add_insecure_port(self.addr)

	def serve(self):
		logging.warning('Starting server !')
		self.server.start()

	def stop(self):
		logging.warning('Stopping server !')
		self.server.stop(None)