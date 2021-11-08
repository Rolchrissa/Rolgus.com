FROM arm32v7/nginx

COPY /build /usr/share/nginx/html
# RUN for X in ico css js svg html jpeg jpg gif png; do find /usr/share/nginx/html/ -type f -name \*.$X -exec sh -c 'OR={};CP={}.gz;gzip -9 -c $OR > $CP' \; ; done

EXPOSE 80
