[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IPageMetaInfo

# Interface: IPageMetaInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### broken\_html?

> `optional` **broken\_html**: [`OnPageResourceIssueInfo`](../classes/OnPageResourceIssueInfo.md)

resource errors and warnings

#### Defined in

main.ts:154724

***

### canonical?

> `optional` **canonical**: `string`

canonical page

#### Defined in

main.ts:154677

***

### charset?

> `optional` **charset**: `number`

code page
example: 65001

#### Defined in

main.ts:154662

***

### content?

> `optional` **content**: [`HtmlContentInfo`](../classes/HtmlContentInfo.md)

overall information about content of the page

#### Defined in

main.ts:154711

***

### cumulative\_layout\_shift?

> `optional` **cumulative\_layout\_shift**: `number`

Core Web Vitals metric measuring the layout stability of the page
measures the sum total of all individual layout shift scores for every unexpected layout shift that occurs during the entire lifespan of the page. Learn more.

#### Defined in

main.ts:154706

***

### deprecated\_tags?

> `optional` **deprecated\_tags**: `string`[]

deprecated tags on the page

#### Defined in

main.ts:154713

***

### description?

> `optional` **description**: `string`

content of the meta description tag

#### Defined in

main.ts:154671

***

### description\_length?

> `optional` **description\_length**: `number`

length of the description tag in characters

#### Defined in

main.ts:154699

***

### duplicate\_meta\_tags?

> `optional` **duplicate\_meta\_tags**: `string`[]

duplicate meta tags on the page

#### Defined in

main.ts:154715

***

### external\_links\_count?

> `optional` **external\_links\_count**: `number`

number of external links on the page

#### Defined in

main.ts:154681

***

### favicon?

> `optional` **favicon**: `string`

favicon of the page

#### Defined in

main.ts:154673

***

### follow?

> `optional` **follow**: `boolean`

indicates whether a page’s ‘meta robots’ allows crawlers to follow the links on the page
if false, the page’s ‘meta robots’ tag contains “nofollow” parameter instructing crawlers not to follow the links on the page

#### Defined in

main.ts:154665

***

### generator?

> `optional` **generator**: `string`

meta tag generator

#### Defined in

main.ts:154667

***

### htags?

> `optional` **htags**: `object`

HTML header tags

#### Index Signature

 \[`key`: `string`\]: `string`[]

#### Defined in

main.ts:154669

***

### images\_count?

> `optional` **images\_count**: `number`

number of images on the page

#### Defined in

main.ts:154685

***

### images\_size?

> `optional` **images\_size**: `number`

total size of images on the page measured in bytes

#### Defined in

main.ts:154687

***

### inbound\_links\_count?

> `optional` **inbound\_links\_count**: `number`

number of internal links pointing at the page

#### Defined in

main.ts:154683

***

### internal\_links\_count?

> `optional` **internal\_links\_count**: `number`

number of internal links on the page

#### Defined in

main.ts:154679

***

### meta\_keywords?

> `optional` **meta\_keywords**: `string`

content of the keywords meta tag

#### Defined in

main.ts:154675

***

### meta\_title?

> `optional` **meta\_title**: `string`

meta title of the page
meta tag in the head section of an HTML document that defines the title of a page

#### Defined in

main.ts:154709

***

### render\_blocking\_scripts\_count?

> `optional` **render\_blocking\_scripts\_count**: `number`

number of scripts on the page that block page rendering

#### Defined in

main.ts:154701

***

### render\_blocking\_stylesheets\_count?

> `optional` **render\_blocking\_stylesheets\_count**: `number`

number of CSS styles on the page that block page rendering

#### Defined in

main.ts:154703

***

### scripts\_count?

> `optional` **scripts\_count**: `number`

number of scripts on the page

#### Defined in

main.ts:154689

***

### scripts\_size?

> `optional` **scripts\_size**: `number`

total size of scripts on the page measured in bytes

#### Defined in

main.ts:154691

***

### social\_media\_tags?

> `optional` **social\_media\_tags**: `object`

object of social media tags found on the page
contains social media tags and their content
supported tags include but are not limited to Open Graph and Twitter card

#### Index Signature

 \[`key`: `string`\]: `string`

#### Defined in

main.ts:154722

***

### spell?

> `optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

main.ts:154718

***

### stylesheets\_count?

> `optional` **stylesheets\_count**: `number`

number of stylesheets on the page

#### Defined in

main.ts:154693

***

### stylesheets\_size?

> `optional` **stylesheets\_size**: `number`

total size of stylesheets on the page measured in bytes

#### Defined in

main.ts:154695

***

### title?

> `optional` **title**: `string`

page title

#### Defined in

main.ts:154659

***

### title\_length?

> `optional` **title\_length**: `number`

length of the title tag in characters

#### Defined in

main.ts:154697
