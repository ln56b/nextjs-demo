"use client";
import { ScheduleSpeakerApi } from "@/app/shared/types/api.types";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";

export default function SpeakerCard({
  full_name,
  avatar_url,
  company,
  bio,
}: ScheduleSpeakerApi) {
  return (
    <Card
      className="flex flex-col mt-6 w-96 rounded-lg"
      placeholder="Speaker card"
    >
      <CardHeader
        floated={false}
        className="h-200 flex justify-center w-full"
        placeholder="card header"
      >
        <Image
          className="aspect-square object-cover flex-shrink-0 flex-grow-0 h-64 w-64 pt-4"
          src={avatar_url}
          alt={full_name}
          width={64}
          height={64}
        />
      </CardHeader>
      <CardBody className="p-5 text-justify" placeholder="card body">
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 text-3xl text-center"
          placeholder="card typo"
        >
          {full_name}
        </Typography>
        <Typography
          placeholder="card typo"
          className="font-bold text-center p-2"
        >
          {company}
        </Typography>
        <Typography
          className="h-24 overflow-clip text-justify"
          placeholder="card typo"
        >
          {bio}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0" placeholder="card footer">
        <Button placeholder="card button">Read More</Button>
      </CardFooter>
    </Card>
  );
}
