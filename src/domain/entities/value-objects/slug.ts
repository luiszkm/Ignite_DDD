export class Slug {
  public value: string;
  constructor(value: string) {
    this.value = value;
  }
  /**
   * Recives a string and normalize it as a slug
   * 
   * Example: "An example title" => "an-example-title"
   * 
   * @param text {string} - The text to be converted to a slug
   */
  static createFromText(text: string) {
    const slugText = text.normalize("NFD")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/_/g, "-")
    .replace(/--+/g, "-")
    .replace(/-$/g, "")

    return new Slug(slugText);
  }
}