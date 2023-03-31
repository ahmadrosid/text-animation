import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import { Layout, Txt } from "@motion-canvas/2d/lib/components";
import { createRef } from "@motion-canvas/core/lib/utils";
import { all, waitFor, waitUntil } from "@motion-canvas/core/lib/flow";

export default makeScene2D(function* (view) {
  const title = createRef<Txt>();

  view.add(
    <Layout direction={"column"}>
      <Txt
        ref={title}
        fill="#e6a700"
        position={[-700, 0]}
        fontFamily={"Fira Code"}
      >
        Hello world
      </Txt>
    </Layout>
  );

  yield* waitUntil("start");

  yield* all(
    title().position.x(700, 0.8).to(-700, 0.8),
    title().fill("#e13238", 1).to("#e6a700", 1)
  );

  yield* waitFor(0.2);
});
