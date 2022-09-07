"""Webezy.io Generated Client Code"""
import asyncio
import logging

import grpc
from generated import PubsubService_pb2,PubsubService_pb2_grpc
from generated import HealthCheck_pb2,HealthCheck_pb2_grpc,PubsubService_pb2,PubsubService_pb2_grpc

import argparse
CHANNEL_OPTIONS = [('grpc.lb_policy_name', 'pick_first'), ('gprc.enable_retries', 0), ('grpc.keepalive_timeout_ms', 10000)]

class projectpubsub():

	def __init__(self, host="localhost:50051", channel_opt=CHANNEL_OPTIONS):

		logging.debug("Starting client class for project 'projectpubsub'")

		self.host = host

		self.channel_opt = channel_opt
		# Channel object
		self.channel = grpc.insecure_channel(target=self.host,options=self.channel_opt)
		# Stubs objects
		
		self.HealthCheck_stub = HealthCheck_pb2_grpc.HealthCheckStub(self.channel)
		self.PubsubService_stub = PubsubService_pb2_grpc.PubsubServiceStub(self.channel)

if __name__ == "__main__":
	parser = argparse.ArgumentParser()
	parser.add_argument("--host",
                        nargs="?",
                        type=str,
                        default="localhost:50051",
                        help="the server host")
	args = parser.parse_args()
	client = projectpubsub(args.host)

	# TODO insert your client code here and use the "stubs"...

