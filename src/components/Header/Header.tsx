import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Github } from "lucide-react";
import { Separator } from "../ui/separator";

export const Header = () => {
  return (
    <header className="p-4 flex justify-between align-middle items-center border-b">
      <p>ai.video</p>

      <div className="flex gap-4 items-center">
        <p className="text-sm text-muted-foreground">
          Desenvolvido com ❤️ por Alison Souza
        </p>

        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <Separator orientation="vertical" className="h-6" />

        <Button variant={"outline"}>
          <Github className="w-4 h-4 mr-2" />
          Github
        </Button>
      </div>
    </header>
  );
};
