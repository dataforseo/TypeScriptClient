[dataforseo-client](../README.md) / [Exports](../modules.md) / IOnPageNonIndexableItem

# Interface: IOnPageNonIndexableItem

## Implemented by

- [`OnPageNonIndexableItem`](../classes/OnPageNonIndexableItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [reason](IOnPageNonIndexableItem.md#reason)
- [url](IOnPageNonIndexableItem.md#url)

## Properties

### reason

• `Optional` **reason**: `string`

the reason why the page is non-indexable
can take the following values: robots_txt, meta_tag, http_header, attribute, too_many_redirects

#### Defined in

[main.ts:149428](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L149428)

___

### url

• `Optional` **url**: `string`

url of the non-indexable page

#### Defined in

[main.ts:149430](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L149430)
