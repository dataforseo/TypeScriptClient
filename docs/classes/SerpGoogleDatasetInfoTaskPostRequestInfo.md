[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleDatasetInfoTaskPostRequestInfo

# Class: SerpGoogleDatasetInfoTaskPostRequestInfo

Defined in: main.ts:58822

## Implements

- [`ISerpGoogleDatasetInfoTaskPostRequestInfo`](../interfaces/ISerpGoogleDatasetInfoTaskPostRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleDatasetInfoTaskPostRequestInfo()

> **new SerpGoogleDatasetInfoTaskPostRequestInfo**(`data`?): [`SerpGoogleDatasetInfoTaskPostRequestInfo`](SerpGoogleDatasetInfoTaskPostRequestInfo.md)

Defined in: main.ts:58894

#### Parameters

##### data?

[`ISerpGoogleDatasetInfoTaskPostRequestInfo`](../interfaces/ISerpGoogleDatasetInfoTaskPostRequestInfo.md)

#### Returns

[`SerpGoogleDatasetInfoTaskPostRequestInfo`](SerpGoogleDatasetInfoTaskPostRequestInfo.md)

## Properties

### dataset\_id?

> `optional` **dataset\_id**: `string`

Defined in: main.ts:58828

ID of the dataset
required field
you can find dataset ID in the dataset URL or dataset item of Google Dataset Search result
example:
L2cvMTFqbl85ZHN6MQ==

#### Implementation of

[`ISerpGoogleDatasetInfoTaskPostRequestInfo`](../interfaces/ISerpGoogleDatasetInfoTaskPostRequestInfo.md).[`dataset_id`](../interfaces/ISerpGoogleDatasetInfoTaskPostRequestInfo.md#dataset_id)

***

### device?

> `optional` **device**: `string`

Defined in: main.ts:58852

device type
optional field
possible value: desktop

#### Implementation of

[`ISerpGoogleDatasetInfoTaskPostRequestInfo`](../interfaces/ISerpGoogleDatasetInfoTaskPostRequestInfo.md).[`device`](../interfaces/ISerpGoogleDatasetInfoTaskPostRequestInfo.md#device)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:58848

search engine language code
optional field
if you use this field, you don’t need to specify language_name
possible value:
en

#### Implementation of

[`ISerpGoogleDatasetInfoTaskPostRequestInfo`](../interfaces/ISerpGoogleDatasetInfoTaskPostRequestInfo.md).[`language_code`](../interfaces/ISerpGoogleDatasetInfoTaskPostRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:58842

full name of search engine language
optional field
if you use this field, you don’t need to specify language_code
possible value:
English

#### Implementation of

[`ISerpGoogleDatasetInfoTaskPostRequestInfo`](../interfaces/ISerpGoogleDatasetInfoTaskPostRequestInfo.md).[`language_name`](../interfaces/ISerpGoogleDatasetInfoTaskPostRequestInfo.md#language_name)

***

### os?

> `optional` **os**: `string`

Defined in: main.ts:58857

device operating system
optional field
choose from the following values: windows, macos
default value: windows

#### Implementation of

[`ISerpGoogleDatasetInfoTaskPostRequestInfo`](../interfaces/ISerpGoogleDatasetInfoTaskPostRequestInfo.md).[`os`](../interfaces/ISerpGoogleDatasetInfoTaskPostRequestInfo.md#os)

***

### pingback\_url?

> `optional` **pingback\_url**: `string`

Defined in: main.ts:58890

notification URL of a completed task
optional field
when a task is completed we will notify you by GET request sent to the URL you have specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/pingscript?id=$id
http://your-server.com/pingscript?id=$id&tag=$tag
Note: special characters in pingback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center

#### Implementation of

[`ISerpGoogleDatasetInfoTaskPostRequestInfo`](../interfaces/ISerpGoogleDatasetInfoTaskPostRequestInfo.md).[`pingback_url`](../interfaces/ISerpGoogleDatasetInfoTaskPostRequestInfo.md#pingback_url)

***

### postback\_data?

> `optional` **postback\_data**: `string`

Defined in: main.ts:58879

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible value: advanced

#### Implementation of

[`ISerpGoogleDatasetInfoTaskPostRequestInfo`](../interfaces/ISerpGoogleDatasetInfoTaskPostRequestInfo.md).[`postback_data`](../interfaces/ISerpGoogleDatasetInfoTaskPostRequestInfo.md#postback_data)

***

### postback\_url?

> `optional` **postback\_url**: `string`

Defined in: main.ts:58874

return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special characters in postback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center

#### Implementation of

[`ISerpGoogleDatasetInfoTaskPostRequestInfo`](../interfaces/ISerpGoogleDatasetInfoTaskPostRequestInfo.md).[`postback_url`](../interfaces/ISerpGoogleDatasetInfoTaskPostRequestInfo.md#postback_url)

***

### priority?

> `optional` **priority**: `number`

Defined in: main.ts:58836

task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page.

#### Implementation of

[`ISerpGoogleDatasetInfoTaskPostRequestInfo`](../interfaces/ISerpGoogleDatasetInfoTaskPostRequestInfo.md).[`priority`](../interfaces/ISerpGoogleDatasetInfoTaskPostRequestInfo.md#priority)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:58863

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`ISerpGoogleDatasetInfoTaskPostRequestInfo`](../interfaces/ISerpGoogleDatasetInfoTaskPostRequestInfo.md).[`tag`](../interfaces/ISerpGoogleDatasetInfoTaskPostRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:58903

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:58929

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleDatasetInfoTaskPostRequestInfo`](SerpGoogleDatasetInfoTaskPostRequestInfo.md)

Defined in: main.ts:58922

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleDatasetInfoTaskPostRequestInfo`](SerpGoogleDatasetInfoTaskPostRequestInfo.md)
