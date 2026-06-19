import musicImage from "../assets/music_sokkers.jpg";

export default function TitleTrack() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <img
        src={musicImage}
        alt="Title Track"
        className="max-w-full rounded-xl shadow-xl"
      />
    </div>
  );
}
