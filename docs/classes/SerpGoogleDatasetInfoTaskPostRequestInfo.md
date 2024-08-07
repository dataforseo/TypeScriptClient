**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpGoogleDatasetInfoTaskPostRequestInfo

# Class: SerpGoogleDatasetInfoTaskPostRequestInfo

## Implements

- [`ISerpGoogleDatasetInfoTaskPostRequestInfo`](../interfaces/ISerpGoogleDatasetInfoTaskPostRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleDatasetInfoTaskPostRequestInfo(data)

> **new SerpGoogleDatasetInfoTaskPostRequestInfo**(`data`?): [`SerpGoogleDatasetInfoTaskPostRequestInfo`](SerpGoogleDatasetInfoTaskPostRequestInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleDatasetInfoTaskPostRequestInfo`](../interfaces/ISerpGoogleDatasetInfoTaskPostRequestInfo.md)

#### Returns

[`SerpGoogleDatasetInfoTaskPostRequestInfo`](SerpGoogleDatasetInfoTaskPostRequestInfo.md)

#### Source

main.ts:56181

## Properties

### dataset\_id?

> **`optional`** **dataset\_id**: `string`

ID of the dataset
required field
you can find dataset ID in the dataset URL or dataset item of Google Dataset Search result
example:
L2cvMTFqbl85ZHN6MQ==

#### Implementation of

[`ISerpGoogleDatasetInfoTaskPostRequestInfo`](../interfaces/ISerpGoogleDatasetInfoTaskPostRequestInfo.md).[`dataset_id`](../interfaces/ISerpGoogleDatasetInfoTaskPostRequestInfo.md#dataset_id)

#### Source

main.ts:56117

***

### device?

> **`optional`** **device**: `string`

device type
optional field
possible value: desktop

#### Implementation of

[`ISerpGoogleDatasetInfoTaskPostRequestInfo`](../interfaces/ISerpGoogleDatasetInfoTaskPostRequestInfo.md).[`device`](../interfaces/ISerpGoogleDatasetInfoTaskPostRequestInfo.md#device)

#### Source

main.ts:56141

***

### language\_code?

> **`optional`** **language\_code**: `string`

search engine language code
optional field
if you use this field, you don’t need to specify language_name
possible value:
en

#### Implementation of

[`ISerpGoogleDatasetInfoTaskPostRequestInfo`](../interfaces/ISerpGoogleDatasetInfoTaskPostRequestInfo.md).[`language_code`](../interfaces/ISerpGoogleDatasetInfoTaskPostRequestInfo.md#language_code)

#### Source

main.ts:56137

***

### language\_name?

> **`optional`** **language\_name**: `string`

full name of search engine language
optional field
if you use this field, you don’t need to specify language_code
possible value:
English

#### Implementation of

[`ISerpGoogleDatasetInfoTaskPostRequestInfo`](../interfaces/ISerpGoogleDatasetInfoTaskPostRequestInfo.md).[`language_name`](../interfaces/ISerpGoogleDatasetInfoTaskPostRequestInfo.md#language_name)

#### Source

main.ts:56131

***

### os?

> **`optional`** **os**: `string`

device operating system
optional field
choose from the following values: windows, macos
default value: windows

#### Implementation of

[`ISerpGoogleDatasetInfoTaskPostRequestInfo`](../interfaces/ISerpGoogleDatasetInfoTaskPostRequestInfo.md).[`os`](../interfaces/ISerpGoogleDatasetInfoTaskPostRequestInfo.md#os)

#### Source

main.ts:56146

***

### pingback\_url?

> **`optional`** **pingback\_url**: `string`

notification URL of a completed task
optional field
when a task is completed we will notify you by GET request sent to the URL you have specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/pingscript?id=$id
http://your-server.com/pingscript?id=$id&tag=$tag
Note: special symbols in pingback_url will be urlencoded;
i.a., the # symbol will be encoded into %23

#### Implementation of

[`ISerpGoogleDatasetInfoTaskPostRequestInfo`](../interfaces/ISerpGoogleDatasetInfoTaskPostRequestInfo.md).[`pingback_url`](../interfaces/ISerpGoogleDatasetInfoTaskPostRequestInfo.md#pingback_url)

#### Source

main.ts:56177

***

### postback\_data?

> **`optional`** **postback\_data**: `string`

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible value: advanced

#### Implementation of

[`ISerpGoogleDatasetInfoTaskPostRequestInfo`](../interfaces/ISerpGoogleDatasetInfoTaskPostRequestInfo.md).[`postback_data`](../interfaces/ISerpGoogleDatasetInfoTaskPostRequestInfo.md#postback_data)

#### Source

main.ts:56167

***

### postback\_url?

> **`optional`** **postback\_url**: `string`

return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special symbols in postback_url will be urlencoded;
i.a., the # symbol will be encoded into %23

#### Implementation of

[`ISerpGoogleDatasetInfoTaskPostRequestInfo`](../interfaces/ISerpGoogleDatasetInfoTaskPostRequestInfo.md).[`postback_url`](../interfaces/ISerpGoogleDatasetInfoTaskPostRequestInfo.md#postback_url)

#### Source

main.ts:56162

***

### priority?

> **`optional`** **priority**: `number`

task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page.

#### Implementation of

[`ISerpGoogleDatasetInfoTaskPostRequestInfo`](../interfaces/ISerpGoogleDatasetInfoTaskPostRequestInfo.md).[`priority`](../interfaces/ISerpGoogleDatasetInfoTaskPostRequestInfo.md#priority)

#### Source

main.ts:56125

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`ISerpGoogleDatasetInfoTaskPostRequestInfo`](../interfaces/ISerpGoogleDatasetInfoTaskPostRequestInfo.md).[`tag`](../interfaces/ISerpGoogleDatasetInfoTaskPostRequestInfo.md#tag)

#### Source

main.ts:56152

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:56190

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:56216

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpGoogleDatasetInfoTaskPostRequestInfo`](SerpGoogleDatasetInfoTaskPostRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleDatasetInfoTaskPostRequestInfo`](SerpGoogleDatasetInfoTaskPostRequestInfo.md)

#### Source

main.ts:56209
