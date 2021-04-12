import { Entity, Column, PrimaryGeneratedColumn, Unique, BeforeInsert } from "typeorm";

@Entity()
@Unique(["hash"])
export class Fingerprint {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  maxTouchPoints: number;

  @Column({ nullable: false })
  osName: string;

  @Column({ nullable: false })
  osVersion: string;

  @Column({ nullable: false })
  browserName: string;

  @Column({ nullable: false })
  browserVersion: number;

  @Column({ nullable: false })
  height: number;

  @Column({ nullable: false })
  width: number;

  @Column({ nullable: false })
  userAgent: string;

  @Column({ nullable: false })
  userAgentHeader: string;

  @Column({ nullable: false })
  VENDOR: string;

  @Column({ nullable: false })
  RENDERER: string;

  @Column({ nullable: false })
  audiooutput: number;

  @Column({ nullable: false })
  videoinput: number;

  @Column({ nullable: false })
  audioinput: number;

  @Column({ nullable: false })
  fonts: string;

  @Column({ nullable: false })
  hardwareConcurrency: number;

  @Column({ nullable: false })
  deviceMemory: number;

  @Column({ nullable: false })
  language: string;

  @Column({ nullable: false })
  languages: string;

  @Column({ nullable: false })
  acceptLanguage: string;

  @Column({ nullable: false })
  MAX_VERTEX_ATTRIBS: number;

  @Column({ nullable: false })
  MAX_VERTEX_UNIFORM_VECTORS: number;

  @Column({ nullable: false })
  MAX_VERTEX_TEXTURE_IMAGE_UNITS: number;

  @Column({ nullable: false })
  MAX_VARYING_VECTORS: number;

  @Column({ nullable: false })
  MAX_RENDERBUFFER_SIZE: number;

  @Column({ nullable: false })
  MAX_TEXTURE_SIZE: number;

  @Column({ nullable: false })
  MAX_TEXTURE_MAX_ANISOTROPY_EXT: number;

  @Column({ nullable: false })
  EXTENNSION_ONE: string;

  @Column({ default: null, nullable: true })
  EXTENNSION_TWO: string;

  @Column({ nullable: false })
  hash: string;

  @Column({ nullable: true })
  ip: string;
}
