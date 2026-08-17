import { VideoProvider } from "./types";
import mockProvider from "./mock";
import vidlinkProvider from "./vidlink";
import vidsrcProvider from "./vidsrc";

const providers: VideoProvider[] = [
  vidlinkProvider,
  vidsrcProvider,
  mockProvider,
];

export function getProviders(): VideoProvider[] {
  return providers;
}

export function getProvider(
  providerId: string
): VideoProvider | undefined {
  return providers.find(
    (provider) => provider.id === providerId
  );
}