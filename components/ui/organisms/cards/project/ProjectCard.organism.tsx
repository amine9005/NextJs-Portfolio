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
import { MagicCard } from "@/components/ui/Effects/magic-card";
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
    <Card className="w-full max-w-sm border-none p-0 shadow-none cursor-pointer group">
      <MagicCard className="p-0">
        <CardHeader className="border-border border-b p-4 [.border-b]:pb-4">
          <CardTitle className="text-center">{card.title}</CardTitle>
          <CardDescription className="text-center">
            {card.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4">
          <Image
            className="w-full group-hover:scale-115 transition-transform duration-300"
            src={"/hero.png"}
            alt="project image"
            width={240}
            height={360}
          />
        </CardContent>
        <CardFooter className="border-border border-t p-4 [.border-t]:pt-4">
          <Button width={"full"}>Learn More</Button>
        </CardFooter>
      </MagicCard>
    </Card>
  );
};

export default ProjectCard;
