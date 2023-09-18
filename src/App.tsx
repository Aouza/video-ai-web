import { FileVideo, Upload, Wand2 } from "lucide-react";
import { Header } from "./components/Header";
import { Textarea } from "./components/ui/textarea";
import { Separator } from "./components/ui/separator";
import { Label } from "./components/ui/label";
import { Button } from "./components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import { Slider } from "./components/ui/slider";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="p-6 gap-6 flex flex-1">
        <div className=" flex flex-col flex-1 gap-4">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea
              className="resize-none p-4 leading-relaxed "
              placeholder="Inclua o prompt para a IA..."
            />
            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="Resultado gerado pela IA..."
              readOnly
            />
          </div>
          <p className="text-sm">
            Lembre-se: você pode utilizar a variável{" "}
            <code className="text-violet-400">{"{transcription}"}</code> no seu
            prompt para adicionar o conteúdo da transcrição do seu vídeo
            selecionado.
          </p>
        </div>
        <aside className="w-80 space-y-8">
          <form className="space-y-6">
            <label
              htmlFor="video"
              className="border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5"
            >
              <FileVideo className="h-4 w-4" />
              Selecione um vídeo
            </label>
            <input
              type="file"
              name="video"
              id="video"
              accept="video/mp4"
              title="video"
              className="sr-only"
            />

            <Separator />
          </form>

          <div className="space-y-4">
            <Label htmlFor="transcription-prompt">Prompt de transcrição</Label>
            <Textarea
              id="transcription-prompt"
              className="h-24 leading-relaxed resize-none"
              placeholder="Inclua palavras-chave mencionadas no vídeo separadas por vírgula. Ex: 'cachorro, gato, animal, pet'"
            />

            <Button className="w-full">
              Carregar vídeo
              <Upload className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <Separator />

          <form className="space-y-6">
            <div className="space-y-4">
              <Label>Prompt</Label>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um prompt..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="title">Título do YouTube</SelectItem>
                    <SelectItem value="description">
                      Descrição do YouTube
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-4">
              <Label>Modelo</Label>

              <Select disabled defaultValue="gpt3.5">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <span className="block text-xs text-muted-foreground italic">
                Você poderá customizar essa opção em breve
              </span>
            </div>

            <Separator />

            <div className="space-y-4">
              <Label>Temperatura</Label>

              <Slider min={0} max={1} step={0.1} />

              <span className="block text-xs text-muted-foreground italic leading-relaxed ">
                Valores mais altos tendem a deixar o resultado mais criativo e
                com possíveis erros
              </span>
            </div>

            <Separator />

            <Button className="w-full">
              Executar <Wand2 className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </aside>
      </main>
    </div>
  );
};

export default App;
