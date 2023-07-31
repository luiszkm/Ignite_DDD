import { expect, it } from "vitest";
import { Slug } from "./slug";

it("should create a new slug from text", () => {
  const slug = Slug.createFromText("An example title");

  expect(slug.value).toEqual("an-example-title");

})