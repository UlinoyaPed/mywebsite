package main

import (
	"bytes"
	"io/ioutil"
	"os"
	"path/filepath"
)

func main() {
	from := "https://github.com/UlinoyaPed/PictureBed"
	to := "https://ghproxy.com/https://github.com/UlinoyaPed/PictureBed"

	replaceSuffix(".md", to, from)
	replaceSuffix(".md", from, to)
}

func replaceSuffix(suffix string, oldStr string, newStr string) error {
	root := "path/to/root/directory"

	err := filepath.Walk(root, func(path string, info os.FileInfo, err error) error {
		if err != nil {
			return err
		}
		if info.IsDir() {
			return nil
		}
		if filepath.Ext(path) != suffix {
			return nil
		}

		file, err := os.OpenFile(path, os.O_RDWR, 0644)
		if err != nil {
			return err
		}
		defer file.Close()

		content, err := ioutil.ReadFile(path)
		if err != nil {
			return err
		}

		replacedContent := bytes.Replace(content, []byte(oldStr), []byte(newStr), -1)

		err = file.Truncate(0)
		if err != nil {
			return err
		}

		_, err = file.WriteAt(replacedContent, 0)
		if err != nil {
			return err
		}

		return nil
	})

	if err != nil {
		return err
	}

	return nil
}
