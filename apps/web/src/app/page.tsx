import { Button, Card, CardBody, CardDescription, CardImage, CardSubtitle, CardTitle } from "@lyrics-challenge/ui";

  export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="sticky top-0 z-10 w-full ly-ds-bg-secondary/50 backdrop-blur supports-[backdrop-filter]:bg-black/30 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/sources/lyric_lg_rgb_mnt_wht.png" alt="Lyric logo" className="h-12 w-auto" />
          </div>
          <div className="flex items-center gap-2">
            <Button variant="primary">Home</Button>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-4 py-8">
          <h1 className="sr-only">Lyric Challenge</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '/sources/im001.png',
              '/sources/im002.png',
              '/sources/im003.png',
              '/sources/im005.png',
              '/sources/im008.png',
              '/sources/im0010.png',
            ].map((src, idx) => (
              <Card key={src}>
                <CardImage src={src} alt={`Artwork ${idx + 1}`} />
                <CardBody>
                  <CardTitle>Album {idx + 1}</CardTitle>
                  <CardSubtitle>Artist name</CardSubtitle>
                  <CardDescription>Some description about this album.</CardDescription>
                </CardBody>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
