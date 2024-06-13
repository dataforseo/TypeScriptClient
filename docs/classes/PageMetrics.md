**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / PageMetrics

# Class: PageMetrics

## Implements

- [`IPageMetrics`](../interfaces/IPageMetrics.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new PageMetrics(data)

> **new PageMetrics**(`data`?): [`PageMetrics`](PageMetrics.md)

#### Parameters

• **data?**: [`IPageMetrics`](../interfaces/IPageMetrics.md)

#### Returns

[`PageMetrics`](PageMetrics.md)

#### Source

main.ts:151131

## Properties

### broken\_links?

> **`optional`** **broken\_links**: `number`

number of broken links
number of broken links across all crawled pages on a target website

#### Implementation of

[`IPageMetrics`](../interfaces/IPageMetrics.md).[`broken_links`](../interfaces/IPageMetrics.md#broken_links)

#### Source

main.ts:151106

***

### broken\_resources?

> **`optional`** **broken\_resources**: `number`

number of broken resources
the number of images and other resources with broken links

#### Implementation of

[`IPageMetrics`](../interfaces/IPageMetrics.md).[`broken_resources`](../interfaces/IPageMetrics.md#broken_resources)

#### Source

main.ts:151109

***

### checks?

> **`optional`** **checks**: `Object`

page-specific on-page check-ups

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IPageMetrics`](../interfaces/IPageMetrics.md).[`checks`](../interfaces/IPageMetrics.md#checks)

#### Source

main.ts:151127

***

### duplicate\_content?

> **`optional`** **duplicate\_content**: `number`

number of pages with duplicate content

#### Implementation of

[`IPageMetrics`](../interfaces/IPageMetrics.md).[`duplicate_content`](../interfaces/IPageMetrics.md#duplicate_content)

#### Source

main.ts:151103

***

### duplicate\_description?

> **`optional`** **duplicate\_description**: `number`

number of pages with duplicate descriptions

#### Implementation of

[`IPageMetrics`](../interfaces/IPageMetrics.md).[`duplicate_description`](../interfaces/IPageMetrics.md#duplicate_description)

#### Source

main.ts:151101

***

### duplicate\_title?

> **`optional`** **duplicate\_title**: `number`

number of pages with duplicate titles

#### Implementation of

[`IPageMetrics`](../interfaces/IPageMetrics.md).[`duplicate_title`](../interfaces/IPageMetrics.md#duplicate_title)

#### Source

main.ts:151099

***

### links\_external?

> **`optional`** **links\_external**: `number`

number of external links
the number of links pointing to other websites

#### Implementation of

[`IPageMetrics`](../interfaces/IPageMetrics.md).[`links_external`](../interfaces/IPageMetrics.md#links_external)

#### Source

main.ts:151094

***

### links\_internal?

> **`optional`** **links\_internal**: `number`

number of internal links
the number of links pointing to other pages within the target website

#### Implementation of

[`IPageMetrics`](../interfaces/IPageMetrics.md).[`links_internal`](../interfaces/IPageMetrics.md#links_internal)

#### Source

main.ts:151097

***

### links\_relation\_conflict?

> **`optional`** **links\_relation\_conflict**: `number`

number of links present on the target website that may have a conflict
for example, if "links_relation_conflict": 2, the target website is referring to the same source by at least one internal link with the rel="nofollow" attribute and by at least one dofollow link

#### Implementation of

[`IPageMetrics`](../interfaces/IPageMetrics.md).[`links_relation_conflict`](../interfaces/IPageMetrics.md#links_relation_conflict)

#### Source

main.ts:151112

***

### non\_indexable?

> **`optional`** **non\_indexable**: `number`

number of non-indexable pages
number of pages that are blocked from being indexed by Google and other search engines by robots.txt, HTTP headers, or meta tags settings;
you can receive a list of non-indexable URLs using this endpoint

#### Implementation of

[`IPageMetrics`](../interfaces/IPageMetrics.md).[`non_indexable`](../interfaces/IPageMetrics.md#non_indexable)

#### Source

main.ts:151125

***

### onpage\_score?

> **`optional`** **onpage\_score**: `number`

shows how website is optimized on a 100-point scale
this field shows how website is optimized considering critical on-page issues and warnings detected;
100 is the highest possible score that means website does not have any critical on-page issues and important warnings;
note that this value depends on the number of crawled pages;
learn more about how the metric is calculated in this help center article

#### Implementation of

[`IPageMetrics`](../interfaces/IPageMetrics.md).[`onpage_score`](../interfaces/IPageMetrics.md#onpage_score)

#### Source

main.ts:151121

***

### redirect\_loop?

> **`optional`** **redirect\_loop**: `number`

number of redirect chains that start and end at the same URL
number of redirect chains where the destination URL redirects back to the original URL

#### Implementation of

[`IPageMetrics`](../interfaces/IPageMetrics.md).[`redirect_loop`](../interfaces/IPageMetrics.md#redirect_loop)

#### Source

main.ts:151115

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:151140

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:151174

***

### fromJS()

> **`static`** **fromJS**(`data`): [`PageMetrics`](PageMetrics.md)

#### Parameters

• **data**: `any`

#### Returns

[`PageMetrics`](PageMetrics.md)

#### Source

main.ts:151167
