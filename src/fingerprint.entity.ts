import { Entity, Column, PrimaryGeneratedColumn, Unique, BeforeInsert } from "typeorm";

@Entity()
@Unique(["hash"])
export class Fingerprint {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  navigator_max_touch_points: number;

  @Column()
  screen_height: number;

  @Column()
  screen_width: number;

  @Column()
  user_agent: string;

  @Column()
  user_agent_header: string;

  @Column()
  webgl1_vendor: string;

  @Column()
  webgl1_renderer: string;

  @Column()
  webgl2_vendor: string;

  @Column()
  webgl2_renderer: string;

  @Column()
  media_audio_inputs: number;

  @Column()
  media_audio_outputs: number;

  @Column()
  media_video_inputs: number;

  @Column()
  fonts: string;

  @Column()
  hardware_concurrency: number;

  @Column()
  device_memory: number;

  @Column()
  languages: string;

  @Column()
  lang_header: string;

  @Column()
  webgl_max_vertex_attribs: number;

  @Column()
  webgl_max_vertex_uniform_vectors: number;

  @Column()
  webgl_max_vertex_texture_image_units: number;

  @Column()
  webgl_max_varying_vectors: number;

  @Column()
  webgl_max_renderbuffer_size: number;

  @Column()
  webgl_max_texture_size: number;

  @Column()
  webgl_max_texture_max_anisotropy_ext: number;

  @Column()
  webgl_supported_extensions: string;

  @Column()
  hash: string;
}
