import React, { useState, useEffect } from 'react';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import {
  DynamoDBDocumentClient,
  ScanCommand,
  PutCommand
} from '@aws-sdk/lib-dynamodb';
import { v4 as uuidv4 } from "uuid";
import { UpdateCommand } from "@aws-sdk/lib-dynamodb";
import { DeleteCommand } from "@aws-sdk/lib-dynamodb";

  
const client = new DynamoDBClient({
  region: process.env.REACT_APP_AWS_REGION,
  credentials: {
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
  }
});
const docClient = DynamoDBDocumentClient.from(client);
export async function fetchPets() {
  const command = new ScanCommand({ TableName: "Pets" });
  const response = await docClient.send(command);
  return response.Items || [];
}

export async function addPet(pet) {
  const command = new PutCommand({
    TableName: "Pets",
    Item: {
      id: uuidv4(),
      ...pet,
    },
  });
  await ddbDocClient.send(command);
}

export async function updatePetStatus(id, newStatus) {
  const command = new UpdateCommand({
    TableName: "Pets",
    Key: { id },
    UpdateExpression: "set #s = :s",
    ExpressionAttributeNames: { "#s": "status" },
    ExpressionAttributeValues: { ":s": newStatus },
  });
  await ddbDocClient.send(command);
}

export async function deletePet(id) {
  const command = new DeleteCommand({
    TableName: "Pets",
    Key: { id },
  });
  await ddbDocClient.send(command);
}

