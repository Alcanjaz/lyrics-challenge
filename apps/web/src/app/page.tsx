import { Button } from "@lyrics-challenge/ui";

  export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
  return (
    <div>
      <div className="ly-ds-bg-primary">
        <div className="ly-ds-bg-cards">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome web 👋
            </h1>
          </div>

          <Button variant="primary" className="ly-ds-text-button">Primary</Button>
        </div>
      </div>
    </div>
  );
}
