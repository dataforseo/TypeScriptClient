**Documentation** • [**Docs**](globals.md)

***

Content generated in the 'GitContent' folder. in 'publish' folder - code for publish packages, in 'UpdateGithubContent' - files to update in github repo

## Requirements:
- install .NET
- install npm
- uninstall java (if installed), cause it might be version conflict with openapi-generator-cli. 
Run batch 'build_clients.bat' in the root folder of the project (if test fails with 'too many requests'/'timeout 60 sec'/'internal server error' - run test manually with GUI & comment tests cmd line in batch (line 30))
- install python

If all requirements completed - run 'build_clients.bat' (should run in console to hold logs after complete). and follow instructions below.

## C#
1. change package version ('DataForSeo.Client' proj), if need pre-release publish - see [here](https://learn.microsoft.com/en-us/nuget/create-packages/prerelease-packages). Then pack in release mode
2. upload '.nupkg' file in nuget.org (username: 'info@dataforseo.com', password: 'q/DNm%*-37eBD-1' + needed 2FA code) [here](https://www.nuget.org/packages/manage/upload). Or use cmd line with API Key - ''

## TypeScript
1. go to generated '.\GitContent\TypeScript\publish\dist' folder
2. update 'package.json' file with new version (and after changes - copy to 'UpdateGithubContent' folder to correctly update github content)
2. run 'npm login' with creds (login 'dataforseo' password '?Z#Z48A4dgVvxgG')
3. run 'npm publish'

## Python
1. go to generated '.\GitContent\Python\publish' folder
2. set next code to 'setup.py' file
```python
from pathlib import Path

this_directory = Path(__file__).parent
long_description = (this_directory / "README.md").read_text()
```
3. update setup function (in 'setup.py' file) and set new package version in 'VERSION' variable
```python
setup(
    name=NAME,
    version=VERSION,
    description="DataForSEO API documentation",
    author="DataForSeo",
    author_email="info@dataforseo.com",
    url="https://github.com/dataforseo/PythonClient",
    keywords=["OpenAPI", "DataForSEO", "DataForSEO API documentation"],
    install_requires=REQUIRES,
    homepage="https://github.com/dataforseo/PythonClient",
    packages=find_packages(exclude=["test", "tests"]),
    include_package_data=True,
    long_description=long_description,
    long_description_content_type='text/markdown',
    package_data={"dataforseo_client": ["py.typed"]},
)
```
4. go to client code folder and remove all imports from '__init__.py' file (in root, 'api', 'model' folders)
5. add in '__init__.py' in 'model' folder next code for dynamic import
```python
import re
import importlib

def camel_to_snake(name):
    name = re.sub('(.)([A-Z][a-z]+)', r'\1_\2', name)
    return re.sub('([a-z0-9])([A-Z])', r'\1_\2', name).lower()

def __getattr__(name):
    file_name = camel_to_snake(name)
    module = importlib.import_module(f'dataforseo_client.models.{file_name}')
    model = getattr(module, name)
    globals()[name] = model
    return model
```

5. add in '__init__.py' in 'api' folder next code for dynamic import
```python
import re
import importlib

def camel_to_snake(name):
    name = re.sub('(.)([A-Z][a-z]+)', r'\1_\2', name)
    return re.sub('([a-z0-9])([A-Z])', r'\1_\2', name).lower()

def __getattr__(name):
    file_name = camel_to_snake(name)
    module = importlib.import_module(f'dataforseo_client.api.{file_name}')
    model = getattr(module, name)
    globals()[name] = model
    return model
```

5. add in '__init__.py' in root folder next code for dynamic import
```python
import re
import importlib

def camel_to_snake(name):
    name = re.sub('(.)([A-Z][a-z]+)', r'\1_\2', name)
    return re.sub('([a-z0-9])([A-Z])', r'\1_\2', name).lower()

def __getattr__(name):
    file_name = camel_to_snake(name)

    modules_to_try = [
        'dataforseo_client',
        'dataforseo_client.api',
        'dataforseo_client.models',
    ]

    for module in modules_to_try:
        try:
            module = importlib.import_module(f'{module}.{file_name}')
            model = getattr(module, name)
            globals()[name] = model
            return model
        except:
            continue
    
    raise ImportError(f"Cannot find {name} in any of the specified modules")
```

5.create a file with name '.pypirc' in 'C:\Users{USER}\'
   add fill it (password is a package API Key that generated [here](https://pypi.org/manage/account/), username - 'dataforseo', password - '_4RRcepzqc@rNFF')
```
[pypi]
  username = __token__
  password = pypi-AgEIcHlwaS5vcmcCJDI5OGE4YzViLTI1MzAtNDU2Yy1iN2QzLTdjYWZjM2MzMDkzNgACKlszLCJhMjM0YzIyOS0wMTE5LTQ2NGItYjE0Yy1hYjU1M2RhN2I1YTEiXQAABiANslbZHVSszuOw7bPLqnSFytZssIsGe6zqkHiqz6sSBQ
```
5. after changes in setup.py - run 
```cli 
python setup.py sdist bdist_wheel
```
6. to publish - run in root folder (where setup file is)
```cli
twine upload dist/*
```

## Java

1. download [gpg tool](https://www.gpg4win.org/) and install it
2. go to '.\GitContent\Java\publish'  filder && update package version in 'pom.xml' file
3. create 'settins.xml' file in 'C:\Users{USER}\.m2\' folder (if not exists - create)
3. set next code to 'settins.xml' file
```xml
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0
                              https://maven.apache.org/xsd/settings-1.0.0.xsd">
   <servers>
      <server>
         <id>central</id>
         <username>9BC2szHi</username>
         <password>aXB+8VdT2q1ZdCg3K+dPLa6u6ugbNr81KJd7blMAQSQa</password>
      </server>

   </servers>

   <profiles>
      <profile>
         <id>gpg-signing</id>
         <properties>
            <gpg.keyname>F066761D444132D78457D6BB641221F86E74478B</gpg.keyname> <!-- Specify your GPG key ID here -->
         </properties>
      </profile>
   </profiles>

   <activeProfiles>
      <activeProfile>sign-artifacts</activeProfile>
   </activeProfiles>

</settings>
```
5. update package version in 'pom.xml' file 
6. run 
```cli
mvn clean install -X
```
and while it's running - enter password for GPG key
```
Kw7<s£w9qAby16&
```
If gpg sign jar files didn't requested (in created 'target' folder should be .jar files & .acs files) - set 'gpg-sign' and 'sign-artifacts' profile manually (for example open in 'jetbrains idea' in 'Maven' tab - section 'Profiles') and run 'mvn clean install -X' again 
7. run 
```cli
mvn deploy
```
8. go to [sonatype](https://central.sonatype.com/publishing) (creds: username - 'info@dataforseo.com', password - 'XtR@VsdDaH6JujK') and find the package, then click 'publish' button
