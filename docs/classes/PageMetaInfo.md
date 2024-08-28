[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / PageMetaInfo

# Class: PageMetaInfo

## Implements

- [`IPageMetaInfo`](../interfaces/IPageMetaInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new PageMetaInfo()

> **new PageMetaInfo**(`data`?): [`PageMetaInfo`](PageMetaInfo.md)

#### Parameters

• **data?**: [`IPageMetaInfo`](../interfaces/IPageMetaInfo.md)

#### Returns

[`PageMetaInfo`](PageMetaInfo.md)

#### Defined in

main.ts:157623

## Properties

### broken\_html?

> `optional` **broken\_html**: [`OnPageResourceIssueInfo`](OnPageResourceIssueInfo.md)

resource errors and warnings

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`broken_html`](../interfaces/IPageMetaInfo.md#broken_html)

#### Defined in

main.ts:157619

***

### canonical?

> `optional` **canonical**: `string`

canonical page

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`canonical`](../interfaces/IPageMetaInfo.md#canonical)

#### Defined in

main.ts:157572

***

### charset?

> `optional` **charset**: `number`

code page
example: 65001

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`charset`](../interfaces/IPageMetaInfo.md#charset)

#### Defined in

main.ts:157557

***

### content?

> `optional` **content**: [`HtmlContentInfo`](HtmlContentInfo.md)

overall information about content of the page

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`content`](../interfaces/IPageMetaInfo.md#content)

#### Defined in

main.ts:157606

***

### cumulative\_layout\_shift?

> `optional` **cumulative\_layout\_shift**: `number`

Core Web Vitals metric measuring the layout stability of the page
measures the sum total of all individual layout shift scores for every unexpected layout shift that occurs during the entire lifespan of the page. Learn more.

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`cumulative_layout_shift`](../interfaces/IPageMetaInfo.md#cumulative_layout_shift)

#### Defined in

main.ts:157601

***

### deprecated\_tags?

> `optional` **deprecated\_tags**: `string`[]

deprecated tags on the page

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`deprecated_tags`](../interfaces/IPageMetaInfo.md#deprecated_tags)

#### Defined in

main.ts:157608

***

### description?

> `optional` **description**: `string`

content of the meta description tag

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`description`](../interfaces/IPageMetaInfo.md#description)

#### Defined in

main.ts:157566

***

### description\_length?

> `optional` **description\_length**: `number`

length of the description tag in characters

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`description_length`](../interfaces/IPageMetaInfo.md#description_length)

#### Defined in

main.ts:157594

***

### duplicate\_meta\_tags?

> `optional` **duplicate\_meta\_tags**: `string`[]

duplicate meta tags on the page

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`duplicate_meta_tags`](../interfaces/IPageMetaInfo.md#duplicate_meta_tags)

#### Defined in

main.ts:157610

***

### external\_links\_count?

> `optional` **external\_links\_count**: `number`

number of external links on the page

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`external_links_count`](../interfaces/IPageMetaInfo.md#external_links_count)

#### Defined in

main.ts:157576

***

### favicon?

> `optional` **favicon**: `string`

favicon of the page

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`favicon`](../interfaces/IPageMetaInfo.md#favicon)

#### Defined in

main.ts:157568

***

### follow?

> `optional` **follow**: `boolean`

indicates whether a page’s ‘meta robots’ allows crawlers to follow the links on the page
if false, the page’s ‘meta robots’ tag contains “nofollow” parameter instructing crawlers not to follow the links on the page

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`follow`](../interfaces/IPageMetaInfo.md#follow)

#### Defined in

main.ts:157560

***

### generator?

> `optional` **generator**: `string`

meta tag generator

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`generator`](../interfaces/IPageMetaInfo.md#generator)

#### Defined in

main.ts:157562

***

### htags?

> `optional` **htags**: `object`

HTML header tags

#### Index Signature

 \[`key`: `string`\]: `string`[]

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`htags`](../interfaces/IPageMetaInfo.md#htags)

#### Defined in

main.ts:157564

***

### images\_count?

> `optional` **images\_count**: `number`

number of images on the page

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`images_count`](../interfaces/IPageMetaInfo.md#images_count)

#### Defined in

main.ts:157580

***

### images\_size?

> `optional` **images\_size**: `number`

total size of images on the page measured in bytes

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`images_size`](../interfaces/IPageMetaInfo.md#images_size)

#### Defined in

main.ts:157582

***

### inbound\_links\_count?

> `optional` **inbound\_links\_count**: `number`

number of internal links pointing at the page

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`inbound_links_count`](../interfaces/IPageMetaInfo.md#inbound_links_count)

#### Defined in

main.ts:157578

***

### internal\_links\_count?

> `optional` **internal\_links\_count**: `number`

number of internal links on the page

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`internal_links_count`](../interfaces/IPageMetaInfo.md#internal_links_count)

#### Defined in

main.ts:157574

***

### meta\_keywords?

> `optional` **meta\_keywords**: `string`

content of the keywords meta tag

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`meta_keywords`](../interfaces/IPageMetaInfo.md#meta_keywords)

#### Defined in

main.ts:157570

***

### meta\_title?

> `optional` **meta\_title**: `string`

meta title of the page
meta tag in the head section of an HTML document that defines the title of a page

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`meta_title`](../interfaces/IPageMetaInfo.md#meta_title)

#### Defined in

main.ts:157604

***

### render\_blocking\_scripts\_count?

> `optional` **render\_blocking\_scripts\_count**: `number`

number of scripts on the page that block page rendering

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`render_blocking_scripts_count`](../interfaces/IPageMetaInfo.md#render_blocking_scripts_count)

#### Defined in

main.ts:157596

***

### render\_blocking\_stylesheets\_count?

> `optional` **render\_blocking\_stylesheets\_count**: `number`

number of CSS styles on the page that block page rendering

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`render_blocking_stylesheets_count`](../interfaces/IPageMetaInfo.md#render_blocking_stylesheets_count)

#### Defined in

main.ts:157598

***

### scripts\_count?

> `optional` **scripts\_count**: `number`

number of scripts on the page

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`scripts_count`](../interfaces/IPageMetaInfo.md#scripts_count)

#### Defined in

main.ts:157584

***

### scripts\_size?

> `optional` **scripts\_size**: `number`

total size of scripts on the page measured in bytes

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`scripts_size`](../interfaces/IPageMetaInfo.md#scripts_size)

#### Defined in

main.ts:157586

***

### social\_media\_tags?

> `optional` **social\_media\_tags**: `object`

object of social media tags found on the page
contains social media tags and their content
supported tags include but are not limited to Open Graph and Twitter card

#### Index Signature

 \[`key`: `string`\]: `string`

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`social_media_tags`](../interfaces/IPageMetaInfo.md#social_media_tags)

#### Defined in

main.ts:157617

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`spell`](../interfaces/IPageMetaInfo.md#spell)

#### Defined in

main.ts:157613

***

### stylesheets\_count?

> `optional` **stylesheets\_count**: `number`

number of stylesheets on the page

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`stylesheets_count`](../interfaces/IPageMetaInfo.md#stylesheets_count)

#### Defined in

main.ts:157588

***

### stylesheets\_size?

> `optional` **stylesheets\_size**: `number`

total size of stylesheets on the page measured in bytes

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`stylesheets_size`](../interfaces/IPageMetaInfo.md#stylesheets_size)

#### Defined in

main.ts:157590

***

### title?

> `optional` **title**: `string`

page title

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`title`](../interfaces/IPageMetaInfo.md#title)

#### Defined in

main.ts:157554

***

### title\_length?

> `optional` **title\_length**: `number`

length of the title tag in characters

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`title_length`](../interfaces/IPageMetaInfo.md#title_length)

#### Defined in

main.ts:157592

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:157632

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:157698

***

### fromJS()

> `static` **fromJS**(`data`): [`PageMetaInfo`](PageMetaInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`PageMetaInfo`](PageMetaInfo.md)

#### Defined in

main.ts:157691
