import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Booking } from "./Booking";

@Entity('rooms')
export class Room extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public number: string;

  @Column()
  public type: string;

  @Column()
  public capacity: number;

  @Column({
    type: 'numeric',
    precision: 7,
    scale: 2
  })
  public price: number;

  // @OneToMany(function () {
  //   return Booking
  // }, function (booking) {
  //   return booking.room
  // })
  @OneToMany(() => Booking, (booking) => booking.room)
  public bookings: Booking[];
}
