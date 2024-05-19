**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / PageMetaInfo

# Class: PageMetaInfo

## Implements

- [`IPageMetaInfo`](../interfaces/IPageMetaInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new PageMetaInfo(data)

> **new PageMetaInfo**(`data`?): [`PageMetaInfo`](PageMetaInfo.md)

#### Parameters

• **data?**: [`IPageMetaInfo`](../interfaces/IPageMetaInfo.md)

#### Returns

[`PageMetaInfo`](PageMetaInfo.md)

#### Source

main.ts:151617

## Properties

### broken\_html?

> **`optional`** **broken\_html**: [`OnPageResourceIssueInfo`](OnPageResourceIssueInfo.md)

resource errors and warnings

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`broken_html`](../interfaces/IPageMetaInfo.md#broken_html)

#### Source

main.ts:151613

***

### canonical?

> **`optional`** **canonical**: `string`

canonical page

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`canonical`](../interfaces/IPageMetaInfo.md#canonical)

#### Source

main.ts:151566

***

### charset?

> **`optional`** **charset**: `number`

code page
example: 65001

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`charset`](../interfaces/IPageMetaInfo.md#charset)

#### Source

main.ts:151551

***

### content?

> **`optional`** **content**: [`HtmlContentInfo`](HtmlContentInfo.md)

overall information about content of the page

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`content`](../interfaces/IPageMetaInfo.md#content)

#### Source

main.ts:151600

***

### cumulative\_layout\_shift?

> **`optional`** **cumulative\_layout\_shift**: `number`

Core Web Vitals metric measuring the layout stability of the page
measures the sum total of all individual layout shift scores for every unexpected layout shift that occurs during the entire lifespan of the page. Learn more.

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`cumulative_layout_shift`](../interfaces/IPageMetaInfo.md#cumulative_layout_shift)

#### Source

main.ts:151595

***

### deprecated\_tags?

> **`optional`** **deprecated\_tags**: `string`[]

deprecated tags on the page

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`deprecated_tags`](../interfaces/IPageMetaInfo.md#deprecated_tags)

#### Source

main.ts:151602

***

### description?

> **`optional`** **description**: `string`

content of the meta description tag

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`description`](../interfaces/IPageMetaInfo.md#description)

#### Source

main.ts:151560

***

### description\_length?

> **`optional`** **description\_length**: `number`

length of the description tag in characters

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`description_length`](../interfaces/IPageMetaInfo.md#description_length)

#### Source

main.ts:151588

***

### duplicate\_meta\_tags?

> **`optional`** **duplicate\_meta\_tags**: `string`[]

duplicate meta tags on the page

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`duplicate_meta_tags`](../interfaces/IPageMetaInfo.md#duplicate_meta_tags)

#### Source

main.ts:151604

***

### external\_links\_count?

> **`optional`** **external\_links\_count**: `number`

number of external links on the page

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`external_links_count`](../interfaces/IPageMetaInfo.md#external_links_count)

#### Source

main.ts:151570

***

### favicon?

> **`optional`** **favicon**: `string`

favicon of the page

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`favicon`](../interfaces/IPageMetaInfo.md#favicon)

#### Source

main.ts:151562

***

### follow?

> **`optional`** **follow**: `boolean`

indicates whether a page’s ‘meta robots’ allows crawlers to follow the links on the page
if false, the page’s ‘meta robots’ tag contains “nofollow” parameter instructing crawlers not to follow the links on the page

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`follow`](../interfaces/IPageMetaInfo.md#follow)

#### Source

main.ts:151554

***

### generator?

> **`optional`** **generator**: `string`

meta tag generator

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`generator`](../interfaces/IPageMetaInfo.md#generator)

#### Source

main.ts:151556

***

### htags?

> **`optional`** **htags**: `Object`

HTML header tags

#### Index signature

 \[`key`: `string`\]: `string`[]

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`htags`](../interfaces/IPageMetaInfo.md#htags)

#### Source

main.ts:151558

***

### images\_count?

> **`optional`** **images\_count**: `number`

number of images on the page

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`images_count`](../interfaces/IPageMetaInfo.md#images_count)

#### Source

main.ts:151574

***

### images\_size?

> **`optional`** **images\_size**: `number`

total size of images on the page measured in bytes

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`images_size`](../interfaces/IPageMetaInfo.md#images_size)

#### Source

main.ts:151576

***

### inbound\_links\_count?

> **`optional`** **inbound\_links\_count**: `number`

number of internal links pointing at the page

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`inbound_links_count`](../interfaces/IPageMetaInfo.md#inbound_links_count)

#### Source

main.ts:151572

***

### internal\_links\_count?

> **`optional`** **internal\_links\_count**: `number`

number of internal links on the page

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`internal_links_count`](../interfaces/IPageMetaInfo.md#internal_links_count)

#### Source

main.ts:151568

***

### meta\_keywords?

> **`optional`** **meta\_keywords**: `string`

content of the keywords meta tag

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`meta_keywords`](../interfaces/IPageMetaInfo.md#meta_keywords)

#### Source

main.ts:151564

***

### meta\_title?

> **`optional`** **meta\_title**: `string`

meta title of the page
meta tag in the head section of an HTML document that defines the title of a page

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`meta_title`](../interfaces/IPageMetaInfo.md#meta_title)

#### Source

main.ts:151598

***

### render\_blocking\_scripts\_count?

> **`optional`** **render\_blocking\_scripts\_count**: `number`

number of scripts on the page that block page rendering

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`render_blocking_scripts_count`](../interfaces/IPageMetaInfo.md#render_blocking_scripts_count)

#### Source

main.ts:151590

***

### render\_blocking\_stylesheets\_count?

> **`optional`** **render\_blocking\_stylesheets\_count**: `number`

number of CSS styles on the page that block page rendering

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`render_blocking_stylesheets_count`](../interfaces/IPageMetaInfo.md#render_blocking_stylesheets_count)

#### Source

main.ts:151592

***

### scripts\_count?

> **`optional`** **scripts\_count**: `number`

number of scripts on the page

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`scripts_count`](../interfaces/IPageMetaInfo.md#scripts_count)

#### Source

main.ts:151578

***

### scripts\_size?

> **`optional`** **scripts\_size**: `number`

total size of scripts on the page measured in bytes

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`scripts_size`](../interfaces/IPageMetaInfo.md#scripts_size)

#### Source

main.ts:151580

***

### social\_media\_tags?

> **`optional`** **social\_media\_tags**: `Object`

object of social media tags found on the page
contains social media tags and their content
supported tags include but are not limited to Open Graph and Twitter card

#### Index signature

 \[`key`: `string`\]: `string`

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`social_media_tags`](../interfaces/IPageMetaInfo.md#social_media_tags)

#### Source

main.ts:151611

***

### spell?

> **`optional`** **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`spell`](../interfaces/IPageMetaInfo.md#spell)

#### Source

main.ts:151607

***

### stylesheets\_count?

> **`optional`** **stylesheets\_count**: `number`

number of stylesheets on the page

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`stylesheets_count`](../interfaces/IPageMetaInfo.md#stylesheets_count)

#### Source

main.ts:151582

***

### stylesheets\_size?

> **`optional`** **stylesheets\_size**: `number`

total size of stylesheets on the page measured in bytes

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`stylesheets_size`](../interfaces/IPageMetaInfo.md#stylesheets_size)

#### Source

main.ts:151584

***

### title?

> **`optional`** **title**: `string`

page title

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`title`](../interfaces/IPageMetaInfo.md#title)

#### Source

main.ts:151548

***

### title\_length?

> **`optional`** **title\_length**: `number`

length of the title tag in characters

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`title_length`](../interfaces/IPageMetaInfo.md#title_length)

#### Source

main.ts:151586

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:151626

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:151692

***

### fromJS()

> **`static`** **fromJS**(`data`): [`PageMetaInfo`](PageMetaInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`PageMetaInfo`](PageMetaInfo.md)

#### Source

main.ts:151685
