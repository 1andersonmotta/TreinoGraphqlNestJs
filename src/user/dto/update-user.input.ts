/* eslint-disable prettier/prettier */
import { InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

@InputType()
export class UpdateUserInput {
    @IsString()
    @IsNotEmpty({ message: "Este campo não pode estar vazio" })
    @IsOptional()
    name?: string;

    @IsEmail()
    @IsNotEmpty({ message: "Este campo não pode estar vazio" })
    @IsOptional()
    email?: string;

}