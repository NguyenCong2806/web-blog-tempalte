import { Injectable } from "@nestjs/common";
import Service from "../Service";
import { IContentService } from "./IContentService";
import { Content } from "src/models/viewmodel/content/Content";

@Injectable()
export class ContentService
  extends Service<Content>
  implements IContentService {
}