"""Webezy.io Generated Service Implementation Code """

# Services method + types implemantation imports
from typing import Iterator
import logging
from urllib import response
from services.generated import SampleService_pb2 as SampleService_messages
from services.generated import SampleService_pb2_grpc as SampleService_service
from services.generated.samplePkg_pb2 import OtherMsg
# Logging util function configurations
logging.basicConfig(
	level="DEBUG",
	format="%(asctime)s - %(funcName)20s() - %(name)s - %(levelname)s - %(message)s",
	datefmt="%Y%m%d-%H:%M%p")


class SampleService(SampleService_service.SampleServiceServicer):

	# IN:[domain.samplePkg.v1.SampleMsg] - OUT:[domain.samplePkg.v1.SampleMsg]
	def SampleRPC(self, SampleMsg:SampleService_messages.samplePkg__pb2.SampleMsg, context):
		print("Request recieved from client -> SampleBool: {0}, SampleString: {1}, SampleInt: {2}".format(
		SampleMsg.SampleBool, SampleMsg.SampleString, SampleMsg.SampleInt))
		SampleMsg.SampleBool = not SampleMsg.SampleBool
		SampleMsg.SampleString = "Some Message From Python Server"
		SampleMsg.SampleInt = SampleMsg.SampleInt + 1
		response = SampleMsg
		
		return response
	def GetSample(self, SampleMsg:SampleService_messages.samplePkg__pb2.SampleMsg, context):
		print("[GetSample] Request recieved from client -> {0}".format(SampleMsg.SampleString))
		response = SampleService_messages.samplePkg__pb2.OtherMsg(Str_Field='Some message from server')
		return response	
	def Test(self, SampleMsg:SampleService_messages.samplePkg__pb2.SampleMsg, context):
		# Your code goes here...
		# response = SampleService_messages.samplePkg__pb2.OtherMsg()
		super().Test(SampleMsg, context) # Comment me when ready
	
	def Teststream(self, SampleMsg:Iterator[SampleService_messages.samplePkg__pb2.SampleMsg], context):
		for i in SampleMsg:
			print("Recived message -> ",i)
			response = SampleService_messages.samplePkg__pb2.OtherMsg(Str_Field=i.SampleString)
		return response
	def NeMethod(self, OtherMsg:Iterator[SampleService_messages.samplePkg__pb2.OtherMsg], context):
		# Your code goes here...
		# response = SampleService_messages.samplePkg__pb2.SampleMsg()
		# return response
		super().NeMethod(OtherMsg, context) # Comment me when ready


	def Serverstream(self, OtherMsg:SampleService_messages.samplePkg__pb2.OtherMsg, context):
		# Your code goes here...
		# for res in [response]:
			# yield res
		super().Serverstream(OtherMsg, context) # Comment me when ready


		# Leave blank space [Compiler-issue]
