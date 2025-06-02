"use client";

import Button from "@/components/Button";
import withPopup from "@/hoc/withPopup";
import withConfetti from "@/hoc/withConfetti";

function Popup({ addPopup, triggerConfetti }) {
  return (
    <div className="wrapper-md grid place-items-center">
      <Button
        color="purple"
        onClick={triggerConfetti}
      >
        Confetti
      </Button>
      <div>
        <Button
          color="blue"
          onClick={() => addPopup("hello!")}
        >
          Click Me
        </Button>
      </div>
      <div>
        <div className="flex flex-col">
          <h2>Text Colors</h2>
          <p className="text-red">This is red text.</p>
          <p className="text-blue">This is blue text.</p>
          <p className="text-green">This is green text.</p>
          <p className="text-purple">This is purple text.</p>
          <p className="text-yellow">This is yellow text.</p>
          <p className="text-gold">This is gold text.</p>
        </div>
      </div>
    </div>
  )
}

export default withConfetti(withPopup(Popup));