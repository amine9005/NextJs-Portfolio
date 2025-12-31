"use client";
import { Button } from "@/components/ui/atoms/button/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/atoms/card/card";
import { H2 } from "@/components/ui/atoms/heading/heading2";
import Image from "next/image";

interface Card {
  title?: React.ReactNode;
  description?: React.ReactNode;
}

interface Props {
  card: Card;
}

const ProjectCard = ({ card }: Props) => {
  return (
    <Card className="w-full sm:max-w-lg cursor-pointer group">
      <CardHeader>
        <CardTitle className="flex justify-center items-center">
          <H2 size={"xl"}>{card.title}</H2>
        </CardTitle>
        <CardDescription className="text-center">
          {card.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          className="w-full group-hover:scale-115 transition-transform duration-300"
          src={"/Me.png"}
          alt="project image"
          width={240}
          height={360}
        />
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <div className="flex justify-center items-center w-full">
          <Button width={"full"}>Learn More</Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
