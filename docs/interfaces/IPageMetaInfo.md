[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IPageMetaInfo

# Interface: IPageMetaInfo

## Implemented by

- [`PageMetaInfo`](../classes/PageMetaInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [broken\_html](IPageMetaInfo.md#broken_html)
- [canonical](IPageMetaInfo.md#canonical)
- [charset](IPageMetaInfo.md#charset)
- [content](IPageMetaInfo.md#content)
- [cumulative\_layout\_shift](IPageMetaInfo.md#cumulative_layout_shift)
- [deprecated\_tags](IPageMetaInfo.md#deprecated_tags)
- [description](IPageMetaInfo.md#description)
- [description\_length](IPageMetaInfo.md#description_length)
- [duplicate\_meta\_tags](IPageMetaInfo.md#duplicate_meta_tags)
- [external\_links\_count](IPageMetaInfo.md#external_links_count)
- [favicon](IPageMetaInfo.md#favicon)
- [follow](IPageMetaInfo.md#follow)
- [generator](IPageMetaInfo.md#generator)
- [htags](IPageMetaInfo.md#htags)
- [images\_count](IPageMetaInfo.md#images_count)
- [images\_size](IPageMetaInfo.md#images_size)
- [inbound\_links\_count](IPageMetaInfo.md#inbound_links_count)
- [internal\_links\_count](IPageMetaInfo.md#internal_links_count)
- [meta\_keywords](IPageMetaInfo.md#meta_keywords)
- [meta\_title](IPageMetaInfo.md#meta_title)
- [render\_blocking\_scripts\_count](IPageMetaInfo.md#render_blocking_scripts_count)
- [render\_blocking\_stylesheets\_count](IPageMetaInfo.md#render_blocking_stylesheets_count)
- [scripts\_count](IPageMetaInfo.md#scripts_count)
- [scripts\_size](IPageMetaInfo.md#scripts_size)
- [social\_media\_tags](IPageMetaInfo.md#social_media_tags)
- [spell](IPageMetaInfo.md#spell)
- [stylesheets\_count](IPageMetaInfo.md#stylesheets_count)
- [stylesheets\_size](IPageMetaInfo.md#stylesheets_size)
- [title](IPageMetaInfo.md#title)
- [title\_length](IPageMetaInfo.md#title_length)

## Properties

### broken\_html

• `Optional` **broken\_html**: [`OnPageResourceIssueInfo`](../classes/OnPageResourceIssueInfo.md)

resource errors and warnings

#### Defined in

[main.ts:144436](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144436)

___


### canonical

• `Optional` **canonical**: `string`

canonical page

#### Defined in

[main.ts:144389](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144389)

___


### charset

• `Optional` **charset**: `number`

code page
example: 65001

#### Defined in

[main.ts:144374](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144374)

___


### content

• `Optional` **content**: [`HtmlContentInfo`](../classes/HtmlContentInfo.md)

overall information about content of the page

#### Defined in

[main.ts:144423](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144423)

___


### cumulative\_layout\_shift

• `Optional` **cumulative\_layout\_shift**: `number`

Core Web Vitals metric measuring the layout stability of the page
measures the sum total of all individual layout shift scores for every unexpected layout shift that occurs during the entire lifespan of the page. Learn more.

#### Defined in

[main.ts:144418](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144418)

___


### deprecated\_tags

• `Optional` **deprecated\_tags**: `string`[]

deprecated tags on the page

#### Defined in

[main.ts:144425](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144425)

___


### description

• `Optional` **description**: `string`

content of the meta description tag

#### Defined in

[main.ts:144383](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144383)

___


### description\_length

• `Optional` **description\_length**: `number`

length of the description tag in characters

#### Defined in

[main.ts:144411](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144411)

___


### duplicate\_meta\_tags

• `Optional` **duplicate\_meta\_tags**: `string`[]

duplicate meta tags on the page

#### Defined in

[main.ts:144427](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144427)

___


### external\_links\_count

• `Optional` **external\_links\_count**: `number`

number of external links on the page

#### Defined in

[main.ts:144393](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144393)

___


### favicon

• `Optional` **favicon**: `string`

favicon of the page

#### Defined in

[main.ts:144385](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144385)

___


### follow

• `Optional` **follow**: `boolean`

indicates whether a page’s ‘meta robots’ allows crawlers to follow the links on the page
if false, the page’s ‘meta robots’ tag contains “nofollow” parameter instructing crawlers not to follow the links on the page

#### Defined in

[main.ts:144377](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144377)

___


### generator

• `Optional` **generator**: `string`

meta tag generator

#### Defined in

[main.ts:144379](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144379)

___


### htags

• `Optional` **htags**: `Object`

HTML header tags

#### Index signature

▪ [key: `string`]: `string`[]

#### Defined in

[main.ts:144381](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144381)

___


### images\_count

• `Optional` **images\_count**: `number`

number of images on the page

#### Defined in

[main.ts:144397](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144397)

___


### images\_size

• `Optional` **images\_size**: `number`

total size of images on the page measured in bytes

#### Defined in

[main.ts:144399](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144399)

___


### inbound\_links\_count

• `Optional` **inbound\_links\_count**: `number`

number of internal links pointing at the page

#### Defined in

[main.ts:144395](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144395)

___


### internal\_links\_count

• `Optional` **internal\_links\_count**: `number`

number of internal links on the page

#### Defined in

[main.ts:144391](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144391)

___


### meta\_keywords

• `Optional` **meta\_keywords**: `string`

content of the keywords meta tag

#### Defined in

[main.ts:144387](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144387)

___


### meta\_title

• `Optional` **meta\_title**: `string`

meta title of the page
meta tag in the head section of an HTML document that defines the title of a page

#### Defined in

[main.ts:144421](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144421)

___


### render\_blocking\_scripts\_count

• `Optional` **render\_blocking\_scripts\_count**: `number`

number of scripts on the page that block page rendering

#### Defined in

[main.ts:144413](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144413)

___


### render\_blocking\_stylesheets\_count

• `Optional` **render\_blocking\_stylesheets\_count**: `number`

number of CSS styles on the page that block page rendering

#### Defined in

[main.ts:144415](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144415)

___


### scripts\_count

• `Optional` **scripts\_count**: `number`

number of scripts on the page

#### Defined in

[main.ts:144401](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144401)

___


### scripts\_size

• `Optional` **scripts\_size**: `number`

total size of scripts on the page measured in bytes

#### Defined in

[main.ts:144403](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144403)

___


### social\_media\_tags

• `Optional` **social\_media\_tags**: `Object`

object of social media tags found on the page
contains social media tags and their content
supported tags include but are not limited to Open Graph and Twitter card

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[main.ts:144434](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144434)

___


### spell

• `Optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

[main.ts:144430](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144430)

___


### stylesheets\_count

• `Optional` **stylesheets\_count**: `number`

number of stylesheets on the page

#### Defined in

[main.ts:144405](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144405)

___


### stylesheets\_size

• `Optional` **stylesheets\_size**: `number`

total size of stylesheets on the page measured in bytes

#### Defined in

[main.ts:144407](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144407)

___


### title

• `Optional` **title**: `string`

page title

#### Defined in

[main.ts:144371](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144371)

___


### title\_length

• `Optional` **title\_length**: `number`

length of the title tag in characters

#### Defined in

[main.ts:144409](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144409)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")