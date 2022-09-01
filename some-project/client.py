"""Webezy.io Generated Client Code"""
import asyncio
import logging

import grpc
from services.generated import SampleService_pb2,SampleService_pb2_grpc

import argparse

from services.generated.samplePkg_pb2 import SampleMsg
CHANNEL_OPTIONS = [('grpc.lb_policy_name', 'pick_first'), ('gprc.enable_retries', 0), ('grpc.keepalive_timeout_ms', 10000)]

class someproject():

	def __init__(self, host="localhost:50051", channel_opt=CHANNEL_OPTIONS):

		logging.debug("Starting client class for project 'someproject'")

		self.host = host

		self.channel_opt = channel_opt
		# Channel object
		self.channel = grpc.insecure_channel(target=self.host,options=self.channel_opt)
		# Stubs objects
		self.SampleService_stub = SampleService_pb2_grpc.SampleServiceStub(self.channel)

if __name__ == "__main__":
	parser = argparse.ArgumentParser()
	parser.add_argument("--host",
                        nargs="?",
                        type=str,
                        default="localhost:50051",
                        help="the server host")
	args = parser.parse_args()
	client = someproject(args.host)

	# TODO insert your client code here and use the "stubs"...
	response = client.SampleService_stub.GetOtherSample(SampleMsg(SampleString='Message from client'))
	print(response)
