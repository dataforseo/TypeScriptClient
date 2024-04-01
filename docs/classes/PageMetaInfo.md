[Documentation](../README.md) / [Exports](../modules.md) / PageMetaInfo

# Class: PageMetaInfo

## Implements

- [`IPageMetaInfo`](../interfaces/IPageMetaInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](PageMetaInfo.md#constructor)

### Properties

- [broken\_html](PageMetaInfo.md#broken_html)
- [canonical](PageMetaInfo.md#canonical)
- [charset](PageMetaInfo.md#charset)
- [content](PageMetaInfo.md#content)
- [cumulative\_layout\_shift](PageMetaInfo.md#cumulative_layout_shift)
- [deprecated\_tags](PageMetaInfo.md#deprecated_tags)
- [description](PageMetaInfo.md#description)
- [description\_length](PageMetaInfo.md#description_length)
- [duplicate\_meta\_tags](PageMetaInfo.md#duplicate_meta_tags)
- [external\_links\_count](PageMetaInfo.md#external_links_count)
- [favicon](PageMetaInfo.md#favicon)
- [follow](PageMetaInfo.md#follow)
- [generator](PageMetaInfo.md#generator)
- [htags](PageMetaInfo.md#htags)
- [images\_count](PageMetaInfo.md#images_count)
- [images\_size](PageMetaInfo.md#images_size)
- [inbound\_links\_count](PageMetaInfo.md#inbound_links_count)
- [internal\_links\_count](PageMetaInfo.md#internal_links_count)
- [meta\_keywords](PageMetaInfo.md#meta_keywords)
- [meta\_title](PageMetaInfo.md#meta_title)
- [render\_blocking\_scripts\_count](PageMetaInfo.md#render_blocking_scripts_count)
- [render\_blocking\_stylesheets\_count](PageMetaInfo.md#render_blocking_stylesheets_count)
- [scripts\_count](PageMetaInfo.md#scripts_count)
- [scripts\_size](PageMetaInfo.md#scripts_size)
- [social\_media\_tags](PageMetaInfo.md#social_media_tags)
- [spell](PageMetaInfo.md#spell)
- [stylesheets\_count](PageMetaInfo.md#stylesheets_count)
- [stylesheets\_size](PageMetaInfo.md#stylesheets_size)
- [title](PageMetaInfo.md#title)
- [title\_length](PageMetaInfo.md#title_length)

### Methods

- [init](PageMetaInfo.md#init)
- [toJSON](PageMetaInfo.md#tojson)
- [fromJS](PageMetaInfo.md#fromjs)

## Constructors

### constructor

• **new PageMetaInfo**(`data?`): [`PageMetaInfo`](PageMetaInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IPageMetaInfo`](../interfaces/IPageMetaInfo.md) |

#### Returns

[`PageMetaInfo`](PageMetaInfo.md)

#### Defined in

main.ts:149661

## Properties

### broken\_html

• `Optional` **broken\_html**: [`OnPageResourceIssueInfo`](OnPageResourceIssueInfo.md)

resource errors and warnings

#### Implementation of

[IPageMetaInfo](../interfaces/IPageMetaInfo.md).[broken_html](../interfaces/IPageMetaInfo.md#broken_html)

#### Defined in

main.ts:149657

___

### canonical

• `Optional` **canonical**: `string`

canonical page

#### Implementation of

[IPageMetaInfo](../interfaces/IPageMetaInfo.md).[canonical](../interfaces/IPageMetaInfo.md#canonical)

#### Defined in

main.ts:149610

___

### charset

• `Optional` **charset**: `number`

code page
example: 65001

#### Implementation of

[IPageMetaInfo](../interfaces/IPageMetaInfo.md).[charset](../interfaces/IPageMetaInfo.md#charset)

#### Defined in

main.ts:149595

___

### content

• `Optional` **content**: [`HtmlContentInfo`](HtmlContentInfo.md)

overall information about content of the page

#### Implementation of

[IPageMetaInfo](../interfaces/IPageMetaInfo.md).[content](../interfaces/IPageMetaInfo.md#content)

#### Defined in

main.ts:149644

___

### cumulative\_layout\_shift

• `Optional` **cumulative\_layout\_shift**: `number`

Core Web Vitals metric measuring the layout stability of the page
measures the sum total of all individual layout shift scores for every unexpected layout shift that occurs during the entire lifespan of the page. Learn more.

#### Implementation of

[IPageMetaInfo](../interfaces/IPageMetaInfo.md).[cumulative_layout_shift](../interfaces/IPageMetaInfo.md#cumulative_layout_shift)

#### Defined in

main.ts:149639

___

### deprecated\_tags

• `Optional` **deprecated\_tags**: `string`[]

deprecated tags on the page

#### Implementation of

[IPageMetaInfo](../interfaces/IPageMetaInfo.md).[deprecated_tags](../interfaces/IPageMetaInfo.md#deprecated_tags)

#### Defined in

main.ts:149646

___

### description

• `Optional` **description**: `string`

content of the meta description tag

#### Implementation of

[IPageMetaInfo](../interfaces/IPageMetaInfo.md).[description](../interfaces/IPageMetaInfo.md#description)

#### Defined in

main.ts:149604

___

### description\_length

• `Optional` **description\_length**: `number`

length of the description tag in characters

#### Implementation of

[IPageMetaInfo](../interfaces/IPageMetaInfo.md).[description_length](../interfaces/IPageMetaInfo.md#description_length)

#### Defined in

main.ts:149632

___

### duplicate\_meta\_tags

• `Optional` **duplicate\_meta\_tags**: `string`[]

duplicate meta tags on the page

#### Implementation of

[IPageMetaInfo](../interfaces/IPageMetaInfo.md).[duplicate_meta_tags](../interfaces/IPageMetaInfo.md#duplicate_meta_tags)

#### Defined in

main.ts:149648

___

### external\_links\_count

• `Optional` **external\_links\_count**: `number`

number of external links on the page

#### Implementation of

[IPageMetaInfo](../interfaces/IPageMetaInfo.md).[external_links_count](../interfaces/IPageMetaInfo.md#external_links_count)

#### Defined in

main.ts:149614

___

### favicon

• `Optional` **favicon**: `string`

favicon of the page

#### Implementation of

[IPageMetaInfo](../interfaces/IPageMetaInfo.md).[favicon](../interfaces/IPageMetaInfo.md#favicon)

#### Defined in

main.ts:149606

___

### follow

• `Optional` **follow**: `boolean`

indicates whether a page’s ‘meta robots’ allows crawlers to follow the links on the page
if false, the page’s ‘meta robots’ tag contains “nofollow” parameter instructing crawlers not to follow the links on the page

#### Implementation of

[IPageMetaInfo](../interfaces/IPageMetaInfo.md).[follow](../interfaces/IPageMetaInfo.md#follow)

#### Defined in

main.ts:149598

___

### generator

• `Optional` **generator**: `string`

meta tag generator

#### Implementation of

[IPageMetaInfo](../interfaces/IPageMetaInfo.md).[generator](../interfaces/IPageMetaInfo.md#generator)

#### Defined in

main.ts:149600

___

### htags

• `Optional` **htags**: `Object`

HTML header tags

#### Index signature

▪ [key: `string`]: `string`[]

#### Implementation of

[IPageMetaInfo](../interfaces/IPageMetaInfo.md).[htags](../interfaces/IPageMetaInfo.md#htags)

#### Defined in

main.ts:149602

___

### images\_count

• `Optional` **images\_count**: `number`

number of images on the page

#### Implementation of

[IPageMetaInfo](../interfaces/IPageMetaInfo.md).[images_count](../interfaces/IPageMetaInfo.md#images_count)

#### Defined in

main.ts:149618

___

### images\_size

• `Optional` **images\_size**: `number`

total size of images on the page measured in bytes

#### Implementation of

[IPageMetaInfo](../interfaces/IPageMetaInfo.md).[images_size](../interfaces/IPageMetaInfo.md#images_size)

#### Defined in

main.ts:149620

___

### inbound\_links\_count

• `Optional` **inbound\_links\_count**: `number`

number of internal links pointing at the page

#### Implementation of

[IPageMetaInfo](../interfaces/IPageMetaInfo.md).[inbound_links_count](../interfaces/IPageMetaInfo.md#inbound_links_count)

#### Defined in

main.ts:149616

___

### internal\_links\_count

• `Optional` **internal\_links\_count**: `number`

number of internal links on the page

#### Implementation of

[IPageMetaInfo](../interfaces/IPageMetaInfo.md).[internal_links_count](../interfaces/IPageMetaInfo.md#internal_links_count)

#### Defined in

main.ts:149612

___

### meta\_keywords

• `Optional` **meta\_keywords**: `string`

content of the keywords meta tag

#### Implementation of

[IPageMetaInfo](../interfaces/IPageMetaInfo.md).[meta_keywords](../interfaces/IPageMetaInfo.md#meta_keywords)

#### Defined in

main.ts:149608

___

### meta\_title

• `Optional` **meta\_title**: `string`

meta title of the page
meta tag in the head section of an HTML document that defines the title of a page

#### Implementation of

[IPageMetaInfo](../interfaces/IPageMetaInfo.md).[meta_title](../interfaces/IPageMetaInfo.md#meta_title)

#### Defined in

main.ts:149642

___

### render\_blocking\_scripts\_count

• `Optional` **render\_blocking\_scripts\_count**: `number`

number of scripts on the page that block page rendering

#### Implementation of

[IPageMetaInfo](../interfaces/IPageMetaInfo.md).[render_blocking_scripts_count](../interfaces/IPageMetaInfo.md#render_blocking_scripts_count)

#### Defined in

main.ts:149634

___

### render\_blocking\_stylesheets\_count

• `Optional` **render\_blocking\_stylesheets\_count**: `number`

number of CSS styles on the page that block page rendering

#### Implementation of

[IPageMetaInfo](../interfaces/IPageMetaInfo.md).[render_blocking_stylesheets_count](../interfaces/IPageMetaInfo.md#render_blocking_stylesheets_count)

#### Defined in

main.ts:149636

___

### scripts\_count

• `Optional` **scripts\_count**: `number`

number of scripts on the page

#### Implementation of

[IPageMetaInfo](../interfaces/IPageMetaInfo.md).[scripts_count](../interfaces/IPageMetaInfo.md#scripts_count)

#### Defined in

main.ts:149622

___

### scripts\_size

• `Optional` **scripts\_size**: `number`

total size of scripts on the page measured in bytes

#### Implementation of

[IPageMetaInfo](../interfaces/IPageMetaInfo.md).[scripts_size](../interfaces/IPageMetaInfo.md#scripts_size)

#### Defined in

main.ts:149624

___

### social\_media\_tags

• `Optional` **social\_media\_tags**: `Object`

object of social media tags found on the page
contains social media tags and their content
supported tags include but are not limited to Open Graph and Twitter card

#### Index signature

▪ [key: `string`]: `string`

#### Implementation of

[IPageMetaInfo](../interfaces/IPageMetaInfo.md).[social_media_tags](../interfaces/IPageMetaInfo.md#social_media_tags)

#### Defined in

main.ts:149655

___

### spell

• `Optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[IPageMetaInfo](../interfaces/IPageMetaInfo.md).[spell](../interfaces/IPageMetaInfo.md#spell)

#### Defined in

main.ts:149651

___

### stylesheets\_count

• `Optional` **stylesheets\_count**: `number`

number of stylesheets on the page

#### Implementation of

[IPageMetaInfo](../interfaces/IPageMetaInfo.md).[stylesheets_count](../interfaces/IPageMetaInfo.md#stylesheets_count)

#### Defined in

main.ts:149626

___

### stylesheets\_size

• `Optional` **stylesheets\_size**: `number`

total size of stylesheets on the page measured in bytes

#### Implementation of

[IPageMetaInfo](../interfaces/IPageMetaInfo.md).[stylesheets_size](../interfaces/IPageMetaInfo.md#stylesheets_size)

#### Defined in

main.ts:149628

___

### title

• `Optional` **title**: `string`

page title

#### Implementation of

[IPageMetaInfo](../interfaces/IPageMetaInfo.md).[title](../interfaces/IPageMetaInfo.md#title)

#### Defined in

main.ts:149592

___

### title\_length

• `Optional` **title\_length**: `number`

length of the title tag in characters

#### Implementation of

[IPageMetaInfo](../interfaces/IPageMetaInfo.md).[title_length](../interfaces/IPageMetaInfo.md#title_length)

#### Defined in

main.ts:149630

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

main.ts:149670

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

main.ts:149736

___

### fromJS

▸ **fromJS**(`data`): [`PageMetaInfo`](PageMetaInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`PageMetaInfo`](PageMetaInfo.md)

#### Defined in

main.ts:149729
