export interface Element {
  name: string;
  appearance: string | null;
  atomic_mass: number;
  boil: number | null;
  bohr_model_image: string | null;
  bohr_model_3d: string | null;
  spectral_img: string | null;
  category: string;
  density: number | null;
  discovered_by: string | null;
  melt: number | null;
  molar_heat: number | null;
  named_by: string | null;
  number: number;
  period: number;
  group: number;
  phase: string;
  source: string;
  summary: string;
  symbol: string;
  xpos: number;
  ypos: number;
  wxpos:  number;
  wypos:  number;
  shells: number[];
  electron_configuration: string;
  electron_affinity: number | null;
  electronegativity_pauling: number | null;
  electron_configuration_semantic: string | null;
  ionization_energies: number[];
  block: string;
  cpk_hex: string | null;
  image: {
    title: string;
    url: string;
    attribution: string;
  };
}