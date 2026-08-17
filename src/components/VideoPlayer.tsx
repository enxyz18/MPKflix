"use client";

type VideoPlayerProps = {
  title?: string;
  source?: {
    url: string;
    type: "iframe" | "video";
  } | null;
};

export default function VideoPlayer({
  title = "MPKflix Player",
  source = null,
}: VideoPlayerProps) {
  if (!source) {
  return (
    <div className="w-full aspect-video rounded-lg overflow-hidden bg-black border border-gray-800">
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">
            ▶
          </div>

          <h2 className="text-xl font-bold">
            {title}
          </h2>

          <p className="text-gray-500 mt-2">
            No video source available.
          </p>
        </div>
      </div>
    </div>
  );
}

  if (source.type === "iframe") {
    return (
      <div className="w-full aspect-video rounded-lg overflow-hidden bg-black">

        <iframe
          src={source.url}
          title={title}
          className="w-full h-full"
          allowFullScreen
          allow="autoplay; fullscreen"
        />

      </div>
    );
  }

  return (
    <div className="w-full aspect-video rounded-lg overflow-hidden bg-black">

      <video
        src={source.url}
        controls
        playsInline
        className="w-full h-full"
      />

    </div>
  );
}