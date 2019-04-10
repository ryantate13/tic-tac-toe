gh-pages:
	rm -rf build && \
	yarn build && \
	cd build && \
	git init && \
	git remote add origin git@github.com:ryantate13/tic-tac-toe.git && \
	git add -A && \
	git commit -m "github pages build" && \
	git push -f origin master:gh-pages