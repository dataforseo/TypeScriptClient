[Documentation](../README.md) / [Exports](../modules.md) / IOrganicSerpElementItem

# Interface: IOrganicSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`IOrganicSerpElementItem`**

## Implemented by

- [`OrganicSerpElementItem`](../classes/OrganicSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [about\_this\_result](IOrganicSerpElementItem.md#about_this_result)
- [amp\_version](IOrganicSerpElementItem.md#amp_version)
- [breadcrumb](IOrganicSerpElementItem.md#breadcrumb)
- [cache\_url](IOrganicSerpElementItem.md#cache_url)
- [description](IOrganicSerpElementItem.md#description)
- [domain](IOrganicSerpElementItem.md#domain)
- [extended\_people\_also\_search](IOrganicSerpElementItem.md#extended_people_also_search)
- [extended\_snippet](IOrganicSerpElementItem.md#extended_snippet)
- [faq](IOrganicSerpElementItem.md#faq)
- [highlighted](IOrganicSerpElementItem.md#highlighted)
- [images](IOrganicSerpElementItem.md#images)
- [is\_featured\_snippet](IOrganicSerpElementItem.md#is_featured_snippet)
- [is\_image](IOrganicSerpElementItem.md#is_image)
- [is\_malicious](IOrganicSerpElementItem.md#is_malicious)
- [is\_video](IOrganicSerpElementItem.md#is_video)
- [is\_web\_story](IOrganicSerpElementItem.md#is_web_story)
- [links](IOrganicSerpElementItem.md#links)
- [position](IOrganicSerpElementItem.md#position)
- [pre\_snippet](IOrganicSerpElementItem.md#pre_snippet)
- [price](IOrganicSerpElementItem.md#price)
- [rank\_absolute](IOrganicSerpElementItem.md#rank_absolute)
- [rank\_group](IOrganicSerpElementItem.md#rank_group)
- [rating](IOrganicSerpElementItem.md#rating)
- [rectangle](IOrganicSerpElementItem.md#rectangle)
- [related\_result](IOrganicSerpElementItem.md#related_result)
- [related\_search\_url](IOrganicSerpElementItem.md#related_search_url)
- [timestamp](IOrganicSerpElementItem.md#timestamp)
- [title](IOrganicSerpElementItem.md#title)
- [url](IOrganicSerpElementItem.md#url)
- [website\_name](IOrganicSerpElementItem.md#website_name)
- [xpath](IOrganicSerpElementItem.md#xpath)

## Properties

### about\_this\_result

• `Optional` **about\_this\_result**: [`AboutThisResultElement`](../classes/AboutThisResultElement.md)

contains information from the ‘About this result’ panel
‘About this result’ panel provides additional context about why Google returned this result for the given query;
this feature appears after clicking on the three dots next to most results

#### Defined in

main.ts:26187

___

### amp\_version

• `Optional` **amp\_version**: `boolean`

Accelerated Mobile Pages
indicates whether an item has the Accelerated Mobile Page (AMP) version

#### Defined in

main.ts:26163

___

### breadcrumb

• `Optional` **breadcrumb**: `string`

breadcrumb in SERP

#### Defined in

main.ts:26140

___

### cache\_url

• `Optional` **cache\_url**: `string`

cached version of the page

#### Defined in

main.ts:26135

___

### description

• `Optional` **description**: `string`

description of the results element in SERP

#### Defined in

main.ts:26154

___

### domain

• `Optional` **domain**: `string`

website domain

#### Defined in

main.ts:26129

___

### extended\_people\_also\_search

• `Optional` **extended\_people\_also\_search**: `string`[]

extension of the organic element
extension of the organic result containing related search queries
Note: extension appears in SERP upon clicking on the result and then bouncing back to search results

#### Defined in

main.ts:26183

___

### extended\_snippet

• `Optional` **extended\_snippet**: `string`

includes additional information appended after the result description in SERP

#### Defined in

main.ts:26158

___

### faq

• `Optional` **faq**: [`FaqBox`](../classes/FaqBox.md)

frequently asked questions
questions and answers extension shown below some of Google’s search results
if there are none, equals null

#### Defined in

main.ts:26179

___

### highlighted

• `Optional` **highlighted**: `string`[]

words highlighted in bold within the results description

#### Defined in

main.ts:26171

___

### images

• `Optional` **images**: [`ImagesElement`](../classes/ImagesElement.md)[]

images of the element

#### Defined in

main.ts:26160

___

### is\_featured\_snippet

• `Optional` **is\_featured\_snippet**: `boolean`

indicates whether the element is a featured_snippet

#### Defined in

main.ts:26148

___

### is\_image

• `Optional` **is\_image**: `boolean`

indicates whether the element contains an image

#### Defined in

main.ts:26144

___

### is\_malicious

• `Optional` **is\_malicious**: `boolean`

indicates whether the element is marked as malicious

#### Defined in

main.ts:26150

___

### is\_video

• `Optional` **is\_video**: `boolean`

indicates whether the element contains a video

#### Defined in

main.ts:26146

___

### is\_web\_story

• `Optional` **is\_web\_story**: `boolean`

indicates whether the element is marked as Google web story

#### Defined in

main.ts:26152

___

### links

• `Optional` **links**: [`LinkElement`](../classes/LinkElement.md)[]

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

#### Defined in

main.ts:26175

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:26125

___

### pre\_snippet

• `Optional` **pre\_snippet**: `string`

includes additional information appended before the result description in SERP

#### Defined in

main.ts:26156

___

### price

• `Optional` **price**: [`PriceInfo`](../classes/PriceInfo.md)

pricing details
contains the pricing details of the product or service featured in the result

#### Defined in

main.ts:26169

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:26121

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:26118

___

### rating

• `Optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Defined in

main.ts:26166

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:26200

___

### related\_result

• `Optional` **related\_result**: [`RelatedResult`](../classes/RelatedResult.md)[]

related result from the same domain
related result from the same domain appears as a part of the main result snippet;
you can derive the related_result snippets as "type": "organic" results by setting the group_organic_results parameter to false in the POST request

#### Defined in

main.ts:26191

___

### related\_search\_url

• `Optional` **related\_search\_url**: `string`

URL to a similar search
URL to a new search for the same keyword(s) on related sites

#### Defined in

main.ts:26138

___

### timestamp

• `Optional` **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:26196

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Defined in

main.ts:26131

___

### url

• `Optional` **url**: `string`

relevant URL in SERP

#### Defined in

main.ts:26133

___

### website\_name

• `Optional` **website\_name**: `string`

name of the website in SERP

#### Defined in

main.ts:26142

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:26127
