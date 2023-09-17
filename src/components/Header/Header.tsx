import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

export const Header = () => {
  return (
    <header className="p-4 flex justify-between align-middle items-center border-b">
      <p>ai.video</p>

      <div className="flex gap-4 items-center">
        <p className="text-sm"> Desenvolvido com ❤️ por Alison Souza</p>

        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <Button>Github</Button>
      </div>
    </header>
  );
};
