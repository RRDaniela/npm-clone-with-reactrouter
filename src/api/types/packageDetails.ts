export interface PackageDetails {
  name: string;
  description: string;
  readme: string;
  author: { email: string; name: string };
  license: string;
  maintainers: {
    email: string;
    string: string;
  }[];
}
