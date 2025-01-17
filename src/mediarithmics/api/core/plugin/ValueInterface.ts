export interface AssetFilePropertyResource {
  original_file_name?: string;
  original_name?: string;
  asset_id?: string;
  file_path?: string;
  file?: string;
}

export interface AssetFolderPropertyResource {
  original_name?: string;
  asset_id?: string;
  path?: string;
}

export interface DataFilePropertyResource {
  uri?: string;
  last_modified?: number;
}

export interface UrlPropertyResource {
  url?: string;
}

export interface StringPropertyResource {
  value?: string;
}

export interface AdLayoutPropertyResource {
  id?: string;
  version?: string;
}

export interface StyleSheetPropertyResource {
  id?: string;
  version?: string;
}

export interface PixelTagPropertyResource {
  value?: string;
}

export interface DoublePropertyResource {
  value?: number;
}

export interface BooleanPropertyResource {
  value?: boolean;
}

export interface IntPropertyResource {
  value?: number;
}

export interface RecommenderPropertyResource {
  recommender_id?: string;
}

export interface NativeDataPropertyResource {
  required_display?: boolean;
  type?: number;
  value?: string;
}

export interface NativeTitlePropertyResource {
  required_display?: boolean;
  value?: string;
}

export interface NativeImagePropertyResource {
  required_display?: boolean;
  width?: number;
  height?: number;
  type?: number;
  original_file_name?: string;
  asset_id?: string;
  file_path?: string;
}
