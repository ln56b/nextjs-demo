import SpeakerCard from "../components/SpeakerCard";
import { ScheduleSpeakerApi } from "../shared/types/api.types";

const getSpeakers = async () => {
  const res = await fetch(
    "https://konfetti.monkeypatch.io/web/conferences/demo-konfetti-2023/speakers"
  );
  const speakers: ScheduleSpeakerApi[] = await res.json();
  return speakers;
};

export default async function Speakers() {
  const speakers = await getSpeakers();
  console.log(speakers);
  return (
    <main className="flex justify-around flex-wrap">
      {speakers.map((speaker) => (
        <SpeakerCard key={speaker.id} {...speaker} />
      ))}
    </main>
  );
}
