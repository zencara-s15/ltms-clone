import { Model } from "sequelize";
import { createHash } from "crypto";

export default abstract class Person extends Model {
  public id!: number;
  public firstNameInKhmer!: string;
  public lastNameInKhmer!: string;
  public firstNameInEnglish!: string;
  public lastNameInEnglish!: string;
  public email!: string;
  public readonly password!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  protected passwordHash(): string {
    return createHash("sha256").update(this.password).digest("hex");
  }
}
