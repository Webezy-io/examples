"""Webezy.io Generated Client Code"""
import asyncio
import logging

import grpc
from generated import SampleService_pb2,SampleService_pb2_grpc
from generated.samplePkg_pb2 import SampleMsg
import argparse
CHANNEL_OPTIONS = [('grpc.lb_policy_name', 'pick_first'), ('gprc.enable_retries', 0), ('grpc.keepalive_timeout_ms', 10000)]

class projectpy():

	def __init__(self, host="localhost:50051", channel_opt=CHANNEL_OPTIONS):

		logging.debug("Starting client class for project 'projectpy'")

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
	client = projectpy(args.host)

	# TODO insert your client code here and use the "stubs"...
	client_message = SampleMsg(
		SampleBool=False, SampleString="Some Message From python Client", SampleInt=0)

	response = client.SampleService_stub.SampleRPC(client_message)
	print("Client Recieved Server Response -> SampleBool: {0}, SampleString: {1}, SampleInt: {2}".format(
		response.SampleBool, response.SampleString, response.SampleInt))
	
	client_message_new = SampleMsg(SampleString='Message from client')
	response_other = client.SampleService_stub.GetSample(client_message_new)
	print("Client Recieved Server Response from GetSample -> str_field: {0}".format(response_other.Str_Field))