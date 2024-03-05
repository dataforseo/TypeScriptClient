[dataforseo-client](../README.md) / [Exports](../modules.md) / ILastModified

# Interface: ILastModified

## Implemented by

- [`LastModified`](../classes/LastModified.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [header](ILastModified.md#header)
- [meta\_tag](ILastModified.md#meta_tag)
- [sitemap](ILastModified.md#sitemap)

## Properties

### header

• `Optional` **header**: `string`

date and time when the header was last modified
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00
if there is no data, the value will be null

#### Defined in

[main.ts:144864](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144864)

___

### meta\_tag

• `Optional` **meta\_tag**: `string`

date and time when the meta tag was last modified
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00
if there is no data, the value will be null

#### Defined in

[main.ts:144876](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144876)

___

### sitemap

• `Optional` **sitemap**: `string`

date and time when the sitemap was last modified
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00
if there is no data, the value will be null

#### Defined in

[main.ts:144870](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144870)
