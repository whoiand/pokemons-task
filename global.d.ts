declare type PokemonBase = {
  name: string;
  url: string;
};

declare type PokemonEntity = {
  abilities?: AbilitiesEntity[] | null;
  base_experience: number;
  cries: Cries;
  forms?: Forms[] | null;
  game_indices?: GameIndicesEntity[] | null;
  height: number;
  held_items?: null[] | null;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves?: MovesEntity[] | null;
  name: string;
  order: number;
  past_abilities?: null[] | null;
  past_types?: null[] | null;
  species: Forms;
  sprites: Sprites;
  stats: StatsEntity[];
  types?: TypesEntity[] | null;
  weight: number;
};

type AbilitiesEntity = {
  ability: Forms;
  is_hidden: boolean;
  slot: number;
};

type Forms = {
  name: string;
  url: string;
};

type Cries = {
  latest: string;
  legacy: string;
};

type GameIndicesEntity = {
  game_index: number;
  version: Forms;
};

type MovesEntity = {
  move: Forms;
  version_group_details?: VersionGroupDetailsEntity[] | null;
};

type VersionGroupDetailsEntity = {
  level_learned_at: number;
  move_learn_method: Forms;
  version_group: Forms;
};

type Sprites = {
  back_default: string;
  back_female?: null;
  back_shiny: string;
  back_shiny_female?: null;
  front_default: string;
  front_female?: null;
  front_shiny: string;
  front_shiny_female?: null;
  other: Other;
};

type Other = {
  dream_world: DreamWorldOrIcons;
};

type DreamWorldOrIcons = {
  front_default: string;
  front_female?: null;
};

type Crystal = {
  back_default: string;
  back_shiny: string;
  back_shiny_transparent: string;
  back_transparent: string;
  front_default: string;
  front_shiny: string;
  front_shiny_transparent: string;
  front_transparent: string;
};

type GoldOrSilver = {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  front_transparent: string;
};

type StatsEntity = {
  base_stat: number;
  effort: number;
  stat: Forms;
};

type TypesEntity = {
  slot: number;
  type: Forms;
};
