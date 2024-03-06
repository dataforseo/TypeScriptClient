[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / PageMetrics

# Class: PageMetrics

## Implements

- [`IPageMetrics`](../interfaces/IPageMetrics.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](PageMetrics.md#constructor)

### Properties

- [broken\_links](PageMetrics.md#broken_links)
- [broken\_resources](PageMetrics.md#broken_resources)
- [checks](PageMetrics.md#checks)
- [duplicate\_content](PageMetrics.md#duplicate_content)
- [duplicate\_description](PageMetrics.md#duplicate_description)
- [duplicate\_title](PageMetrics.md#duplicate_title)
- [links\_external](PageMetrics.md#links_external)
- [links\_internal](PageMetrics.md#links_internal)
- [links\_relation\_conflict](PageMetrics.md#links_relation_conflict)
- [non\_indexable](PageMetrics.md#non_indexable)
- [onpage\_score](PageMetrics.md#onpage_score)
- [redirect\_loop](PageMetrics.md#redirect_loop)

### Methods

- [init](PageMetrics.md#init)
- [toJSON](PageMetrics.md#tojson)
- [fromJS](PageMetrics.md#fromjs)

## Constructors

### constructor

• **new PageMetrics**(`data?`): [`PageMetrics`](PageMetrics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IPageMetrics`](../interfaces/IPageMetrics.md) |

#### Returns

[`PageMetrics`](PageMetrics.md)

#### Defined in

[main.ts:143555](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143555)

## Properties

### broken\_links

• `Optional` **broken\_links**: `number`

number of broken links
number of broken links across all crawled pages on a target website

#### Implementation of

[IPageMetrics](../interfaces/IPageMetrics.md).[broken_links](../interfaces/IPageMetrics.md#broken_links)

#### Defined in

[main.ts:143530](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143530)

___


### broken\_resources

• `Optional` **broken\_resources**: `number`

number of broken resources
the number of images and other resources with broken links

#### Implementation of

[IPageMetrics](../interfaces/IPageMetrics.md).[broken_resources](../interfaces/IPageMetrics.md#broken_resources)

#### Defined in

[main.ts:143533](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143533)

___


### checks

• `Optional` **checks**: `Object`

page-specific on-page check-ups

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IPageMetrics](../interfaces/IPageMetrics.md).[checks](../interfaces/IPageMetrics.md#checks)

#### Defined in

[main.ts:143551](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143551)

___


### duplicate\_content

• `Optional` **duplicate\_content**: `number`

number of pages with duplicate content

#### Implementation of

[IPageMetrics](../interfaces/IPageMetrics.md).[duplicate_content](../interfaces/IPageMetrics.md#duplicate_content)

#### Defined in

[main.ts:143527](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143527)

___


### duplicate\_description

• `Optional` **duplicate\_description**: `number`

number of pages with duplicate descriptions

#### Implementation of

[IPageMetrics](../interfaces/IPageMetrics.md).[duplicate_description](../interfaces/IPageMetrics.md#duplicate_description)

#### Defined in

[main.ts:143525](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143525)

___


### duplicate\_title

• `Optional` **duplicate\_title**: `number`

number of pages with duplicate titles

#### Implementation of

[IPageMetrics](../interfaces/IPageMetrics.md).[duplicate_title](../interfaces/IPageMetrics.md#duplicate_title)

#### Defined in

[main.ts:143523](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143523)

___


### links\_external

• `Optional` **links\_external**: `number`

number of external links
the number of links pointing to other websites

#### Implementation of

[IPageMetrics](../interfaces/IPageMetrics.md).[links_external](../interfaces/IPageMetrics.md#links_external)

#### Defined in

[main.ts:143518](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143518)

___


### links\_internal

• `Optional` **links\_internal**: `number`

number of internal links
the number of links pointing to other pages within the target website

#### Implementation of

[IPageMetrics](../interfaces/IPageMetrics.md).[links_internal](../interfaces/IPageMetrics.md#links_internal)

#### Defined in

[main.ts:143521](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143521)

___


### links\_relation\_conflict

• `Optional` **links\_relation\_conflict**: `number`

number of links present on the target website that may have a conflict
for example, if "links_relation_conflict": 2, the target website is referring to the same source by at least one internal link with the rel="nofollow" attribute and by at least one dofollow link

#### Implementation of

[IPageMetrics](../interfaces/IPageMetrics.md).[links_relation_conflict](../interfaces/IPageMetrics.md#links_relation_conflict)

#### Defined in

[main.ts:143536](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143536)

___


### non\_indexable

• `Optional` **non\_indexable**: `number`

number of non-indexable pages
number of pages that are blocked from being indexed by Google and other search engines by robots.txt, HTTP headers, or meta tags settings;
you can receive a list of non-indexable URLs using this endpoint

#### Implementation of

[IPageMetrics](../interfaces/IPageMetrics.md).[non_indexable](../interfaces/IPageMetrics.md#non_indexable)

#### Defined in

[main.ts:143549](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143549)

___


### onpage\_score

• `Optional` **onpage\_score**: `number`

shows how website is optimized on a 100-point scale
this field shows how website is optimized considering critical on-page issues and warnings detected;
100 is the highest possible score that means website does not have any critical on-page issues and important warnings;
note that this value depends on the number of crawled pages;
learn more about how the metric is calculated in this help center article

#### Implementation of

[IPageMetrics](../interfaces/IPageMetrics.md).[onpage_score](../interfaces/IPageMetrics.md#onpage_score)

#### Defined in

[main.ts:143545](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143545)

___


### redirect\_loop

• `Optional` **redirect\_loop**: `number`

number of redirect chains that start and end at the same URL
number of redirect chains where the destination URL redirects back to the original URL

#### Implementation of

[IPageMetrics](../interfaces/IPageMetrics.md).[redirect_loop](../interfaces/IPageMetrics.md#redirect_loop)

#### Defined in

[main.ts:143539](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143539)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

[main.ts:143564](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143564)

___


### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

[main.ts:143598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143598)

___


### fromJS

▸ **fromJS**(`data`): [`PageMetrics`](PageMetrics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`PageMetrics`](PageMetrics.md)

#### Defined in

[main.ts:143591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143591)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")